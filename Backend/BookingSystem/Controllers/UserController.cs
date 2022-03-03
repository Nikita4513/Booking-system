using BookingSystem.DataBase;
using BookingSystem.Models;
using BookingSystem.Models.User;
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
    [Route("user")]
    [AllowAnonymous]
    public class UserController : ControllerBase
    {
        private readonly BookingDBContext db;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        public UserController(BookingDBContext db, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.db = db;
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        /// <summary>
        /// Регистрация пользователя
        /// </summary>
        [HttpPost("register")]
        public async Task<IActionResult> RegisterUserAsync(RegistrationModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new User { UserName = model.Nickname };
                var result = await userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await signInManager.SignInAsync(user, model.RememberMe);
                    return Ok(new UserModel(user));
                }
            }
            return BadRequest();
        }

        /// <summary>
        /// Логин
        /// </summary>
        [HttpPost("login")]
        public async Task<IActionResult> LoginUserAsync(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await signInManager.PasswordSignInAsync(model.Nickname, model.Password, model.RememberMe, false);
                if (result.Succeeded)
                {
                    var user = db.Users.First(u => u.UserName == model.Nickname);
                    return Ok(new UserModel(user));
                }
            }
            return BadRequest();
        }
    }
}
