using Infrastructure.Data_Access;
using Infrastructure.Dto;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static Infrastructure.Persistance.ServiceReponses;


namespace Infrastructure.Persistance
{
    public class UserAccount(
        UserManager<ApplicationUser> userManager, 
        RoleManager<IdentityRole> roleManager,      
        IConfiguration config
        ) : IUserAccount
    {

        public async Task<GeneralResponse> CreateAccount(UserDto userDto)
        {
            if (userDto == null) return new GeneralResponse(false, "User information is Empty");

            var newUser = new ApplicationUser()
            {
                FullName = userDto.Name,
                Email = userDto.EmailAddress,
                PasswordHash = userDto.Password,
                UserName = userDto.EmailAddress
            };

            var user = await userManager.FindByEmailAsync(newUser.Email);
            if (user is not null) return new GeneralResponse(false, "User registered already.");

            var createUser = await userManager.CreateAsync(newUser, userDto.Password);
            if (!createUser.Succeeded) return new GeneralResponse(false, "Error occured please try again");

            var checkAdmin = await roleManager.FindByNameAsync("Admin");
            if(checkAdmin is null) 
                await roleManager.CreateAsync(new IdentityRole { Name = "Admin" });

            var checkUser = await roleManager.FindByNameAsync("User");
            if (checkUser is null)
                await roleManager.CreateAsync(new IdentityRole { Name = "User" });

            await userManager.AddToRoleAsync(newUser, "Admin");
            await userManager.AddToRoleAsync(newUser, "User");

            return new GeneralResponse(true, "New user account has been created");
        }



        public async Task<LoginResponse> LoginAccount(LoginDto loginDto)
        {
             if (loginDto == null) 
                return new LoginResponse(false, null, "User container is empty");

            var getUser = await userManager.FindByEmailAsync(loginDto.EmailAddress);
            if(getUser is null)
                return new LoginResponse(false, null, "User not found");

            bool checkUserPassword = await userManager.CheckPasswordAsync(getUser, loginDto.Password);
            if(!checkUserPassword)
                return new LoginResponse(false, null, "Invalid email/password credentials");

            var getUserRole = await userManager.GetRolesAsync(getUser);
            var userSession = new UserSession(getUser.Id, getUser.FullName, getUser.Email, getUserRole.First());
            string token = GenerateToken(userSession);

            //add token to user table 
            getUser.JwtRefreshToken = token;
            getUser.JwtRefreshTokenExpire = DateTime.Now.AddDays(14);
            var userUpdated = await userManager.UpdateAsync(getUser);

            if (userUpdated is null)
                return new LoginResponse(false, null, "Failed to login user");

            //now when we know that everything is good return positive login response
            return new LoginResponse(true, token, "login completed");
        }


        private string GenerateToken(UserSession user) {

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]!));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var userClaims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id!.ToString()),
                new Claim(ClaimTypes.Name, user.Name!),
                new Claim(ClaimTypes.Email, user.Email!),
                new Claim(ClaimTypes.Role, user.Role!)
            };

            var token = new JwtSecurityToken(
                    issuer: config["Jwt:Issuer"],
                    audience: config["Jwt:Audience"],
                    claims: userClaims,
                    expires: DateTime.Now.AddDays(14),
                    signingCredentials: credentials
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        //private string RefreshToken(UserSession user)
        //{

        //}


        //public async Task<GeneralResponse> CreateAccount(UserDto userDto)
        //{
        //    if (userDto == null) return new GeneralResponse(false, "User information is Empty");

        //    var newUser = new ApplicationUser()
        //    {
        //        FullName = userDto.Name,
        //        Email = userDto.EmailAddress,
        //        PasswordHash = userDto.Password,
        //        UserName = userDto.EmailAddress
        //    };

        //    var user = await userManager.FindByEmailAsync( newUser.Email );
        //    if (user is not null) return new GeneralResponse(false, "User registered already.");

        //    var createUser = await userManager.CreateAsync( newUser, userDto.Password );
        //    if (!createUser.Succeeded) return new GeneralResponse(false, "Error occured please try again");

        //    //assign amin role to the first user
        //    var checkAdmin = await roleManager.FindByNameAsync( "Admin" );
        //    if(checkAdmin is null)
        //    {
        //        await roleManager.CreateAsync(new IdentityRole { Name = "Admin" });
        //        await userManager.AddToRoleAsync(newUser, "Admin");

        //        return new GeneralResponse(true, "New account has been created");
        //    }
        //    else
        //    {
        //        var checkUser = await roleManager.FindByNameAsync("User");
        //        if (checkUser is null)               
        //            await roleManager.CreateAsync(new IdentityRole { Name = "User" });

        //        await userManager.AddToRoleAsync(newUser, "User");
        //        return new GeneralResponse(true, "Account created");
        //    }
        //}
    }
}
