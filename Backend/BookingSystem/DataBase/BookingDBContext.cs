using BookingSystem.Models.Device;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BookingSystem.DataBase
{
    public class BookingDBContext : IdentityDbContext<User>
    {
        public BookingDBContext(DbContextOptions<BookingDBContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Device> Devices { get; set; }

        public List<DeviceModel> GetBookedDevices()
        {
            return GetDevices(true);
        }

        public List<DeviceModel> GetNotBookedDevices()
        {
            return GetDevices(false);
        }

        private List<DeviceModel> GetDevices(bool isBookedDevice)
        {
            var devices = new List<DeviceModel>();
            foreach (var device in Devices.ToList())
            {
                var bookings = Bookings.Where(b => b.DeviceId == device.Id).ToList();
                var deviceModel = new DeviceModel(device, bookings.Select(b => new BookingModel(b)).ToList());
                if (bookings.Any(b => b.Start <= DateTime.Now && b.End >= DateTime.Now))
                {
                    if (isBookedDevice)
                    { 
                        devices.Add(deviceModel);
                    }
                }
                else if (!isBookedDevice)
                {
                    devices.Add(deviceModel);
                }
            }
            return devices;
        }
    }
}
