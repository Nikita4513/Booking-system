using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.DataBase
{
    public class User : IdentityUser
    {
        public string Password { get; set; }

        public List<Booking> Bookings { get; set; }
    }
}
