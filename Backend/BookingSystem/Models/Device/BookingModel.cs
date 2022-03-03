using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.Models.Device
{
    public class BookingModel
    {
        public BookingModel()
        {

        }

        public BookingModel(DataBase.Booking dbBooking)
        {
            Id = dbBooking.Id;
            DeviceId = dbBooking.DeviceId;
            Start = dbBooking.Start;
            End = dbBooking.End;
            Comment = dbBooking.Comment;
        }

        public int Id { get; set; }
        public int DeviceId { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Comment { get; set; }
    }
}
