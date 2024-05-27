using Infrastructure.Dto;
using Infrastructure.Persistance;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController(IUserAccount _userAccount) : ControllerBase
    {
        [Authorize(Roles = "Admin")]
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserDto userDto)
        {
            var Response = await _userAccount.CreateAccount(userDto);
            return Ok(Response);
        }



        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            var Response = await _userAccount.LoginAccount(loginDto);
                return Ok(Response);
            
        }
    }
}
