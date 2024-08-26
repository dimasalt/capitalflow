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
            var Response = await _userAccount.CreateAccountAsync(userDto);
            return Ok(Response);
        }



        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            var Response = await _userAccount.LoginAccountAsync(loginDto);
            return Ok(Response);
            
        }

        [Authorize]
        [HttpPost("logout")]
        public async Task<IActionResult> Logout(string token)
        {
            var Response = await _userAccount.LogoutAccountAsync(token);
            return Ok(Response);
        }
    }
}
