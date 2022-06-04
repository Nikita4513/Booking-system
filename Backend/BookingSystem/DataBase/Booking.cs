using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.DataBase
{
    public class Booking
    {
        public int Id { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Comment { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }
        public int DeviceId { get; set; }
        public Device Device { get; set; }


    }
}
