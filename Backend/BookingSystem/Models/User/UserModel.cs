using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.Models.User
{
    public class UserModel
    {
        public UserModel()
        {

        }

        public UserModel(DataBase.User user)
        {
            Nickname = user.UserName;
        }

        public string Nickname { get; set; }
    }
}
