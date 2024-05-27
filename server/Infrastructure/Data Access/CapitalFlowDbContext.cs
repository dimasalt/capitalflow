using Microsoft.EntityFrameworkCore;
using Domain.Enteties;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace Infrastructure.Data_Access;

public class CapitalFlowDbContext : IdentityDbContext<ApplicationUser>
{
    public CapitalFlowDbContext(DbContextOptions<CapitalFlowDbContext> opt) : base(opt) 
    { 
    }

    public DbSet<Contact> Contacts { get; set; }
    public DbSet<ContactType> ContactTypes { get; set; }
}
