using BookingSystem.DataBase;
using BookingSystem.Models.Device;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.Controllers
{
    [ApiController]
    [Route("device")]
    [Authorize]
    public class DeviceController : ControllerBase
    {
        private readonly BookingDBContext db;
        private readonly UserManager<User> userManager;

        public DeviceController(BookingDBContext db, UserManager<User> userManager)
        {
            this.db = db;
            this.userManager = userManager;
        }

        /// <summary>
        /// Получить информацию обо всех устройствах
        /// </summary>
        [HttpGet("")]
        public IActionResult GetDevices()
        {
            var bookedDevices = db.GetBookedDevices();
            var notBookedDevices = db.GetNotBookedDevices();
            return Ok(new AllDevicesModel { Booked = bookedDevices, NotBooked = notBookedDevices });
        }

        /// <summary>
        /// Получить информацию о забронированных в данный момент устройствах
        /// </summary>
        [HttpGet("booked")]
        public IActionResult GetBookedDevices()
        {
            return Ok(db.GetBookedDevices());
        }

        /// <summary>
        /// Получить информацию о свободных в данный момент устройствах
        /// </summary>
        [HttpGet("not-booked")]
        public IActionResult GetNotBookedDevices()
        {
            return Ok(db.GetNotBookedDevices());
        }

        /// <summary>
        /// Получить информацию об устройстве
        /// </summary>
        /// <param name="id">id устройства</param>
        [HttpGet("{id}")]
        public IActionResult GetDevice([FromRoute(Name = "id")] int id)
        {
            var device = db.Devices.FirstOrDefault(d => d.Id == id);
            if (device == null)
            {
                return BadRequest();
            }
            var bookings = db.Bookings.Where(b => b.DeviceId == id).Select(b => new BookingModel(b)).ToList();
            return Ok(new DeviceModel(device, bookings));
        }

        /// <summary>
        /// Забронировать устройство
        /// </summary>
        /// <param name="id">id устройства</param>
        [HttpPost("{id}/book")]
        public async Task<IActionResult> BookDeviceAsync([FromRoute(Name = "id")] int id, BookingModel model)
        {
            if (ModelState.IsValid)
            {
                //if (model.Start < DateTime.Now || model.Start >= model.End)
                //    return BadRequest();
                var device = db.Devices.FirstOrDefault(d => d.Id == id);
                if (device == null)
                {
                    return BadRequest();
                }
                var bookings = db.Bookings.Where(b => b.Device.Id == device.Id);
                if (bookings.Any(b => !(b.Start < model.Start && b.End < model.Start || b.Start > model.End && b.End > model.End)))
                {
                    return BadRequest();
                }
                var booking = new Booking { Start = model.Start, End = model.End, Comment = model.Comment, Device = device, User = await userManager.GetUserAsync(User) };
                db.Bookings.Add(booking);
                db.SaveChanges();
                model.Id = booking.Id;
                return Ok(model);
            }
            return BadRequest();
        }

        /// <summary>
        /// Отменить бронь
        /// </summary>
        /// <param name="id">id брони</param>
        [HttpPost("{book-id}/cancel-book")]
        public async Task<IActionResult> CancelBookAsync([FromRoute(Name = "book-id")] int id)
        {
            var booking = db.Bookings.FirstOrDefault(b => b.Id == id);
            var user = await userManager.GetUserAsync(User);
            if (booking == null || booking.UserId != user.Id || booking.End < DateTime.UtcNow)
            {
                return BadRequest();
            }
            if (booking.Start > DateTime.Now)
            {
                db.Bookings.Remove(booking);
            }
            else
            {
                booking.End = DateTime.Now;
            }
            db.SaveChanges();
            return Ok();
        }

        /// <summary>
        /// Возвращает все забронированные устройства пользователя. Среди броней указаны только брони пользователя, другие не возвращаются
        /// </summary>
        /// <returns></returns>
        [HttpGet("my-bookings")]
        public async Task<IActionResult> GetMyBookingsAsync()
        {
            var user = await userManager.GetUserAsync(User);
            var bookings = db.Bookings.Where(b => b.UserId == user.Id);
            var devices = bookings
                .Select(b => b.DeviceId)
                .Distinct()
                .ToList()
                .Select(id => db.Devices.FirstOrDefault(d => d.Id == id))
                .Select(d => new DeviceModel(d))
                .ToList();
            foreach (var device in devices)
            {
                var deviceBookings = bookings.Where(b => b.DeviceId == device.Id).Select(b => new BookingModel(b)).ToList();
                device.Bookings = deviceBookings;
            }
            return Ok(devices.Where(d => d.IsBooked).ToList());
        }

        /// <summary>
        /// Добавить устройство
        /// </summary>
        [HttpPost("")]
        public async Task<IActionResult> PostDeviceAsync(PostModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.GetUserAsync(User);
                var device = new Device { Name = model.Name, Year = model.Year, Description = model.Description, Creator = user };
                db.Devices.Add(device);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }

        /// <summary>
        /// Удалить устройство
        /// </summary>
        /// <param name="id">id устройства</param>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeviceAsync([FromRoute] int id)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.GetUserAsync(User);
                var device = db.Devices.FirstOrDefault(d => d.Id == id);
                if (device.CreatorId == user.Id)
                {
                    db.Devices.Remove(device);
                    db.SaveChanges();
                    return Ok();
                }
            }
            return BadRequest();
        }
    }
}
