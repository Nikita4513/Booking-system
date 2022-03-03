using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.Models.User
{
    public class RegistrationModel
    {
        public string Nickname { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; } = false;
    }
}
