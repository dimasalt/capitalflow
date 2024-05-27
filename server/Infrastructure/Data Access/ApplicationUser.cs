using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data_Access
{
    public class ApplicationUser : IdentityUser
    {
        public string? FullName { get; set; }
        public string? JwtToken { get; set; } 
        public DateTime? JwtTokenExpire { get; set; }
        public string? JwtRefreshToken { get; set; }
        public DateTime? JwtRefreshTokenExpire { get; set; }
    }
}
