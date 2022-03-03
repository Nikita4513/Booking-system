using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.DataBase
{
    public class Device
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Description { get; set; }
        public string CreatorId { get; set; }
        public User Creator { get; set; }

        public List<Booking> Bookings { get; set; }
    }
}
