﻿

namespace Infrastructure.Persistance
{
    public class ServiceReponses
    {
        public record class GeneralResponse(bool Flag, string Message = "");
        public record class LoginResponse(bool Flag, string? Token, string Message );
        public record LogoutResponse(bool Flag, string? Token, string Message);
    }
}
