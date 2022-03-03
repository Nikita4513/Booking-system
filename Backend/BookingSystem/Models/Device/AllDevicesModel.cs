using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingSystem.Models.Device
{
    public class AllDevicesModel
    {
        public List<DeviceModel> NotBooked { get; set; }
        public List<DeviceModel> Booked { get; set; }
    }
}
