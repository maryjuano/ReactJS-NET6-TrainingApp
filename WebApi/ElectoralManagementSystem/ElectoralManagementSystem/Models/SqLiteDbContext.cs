using Microsoft.EntityFrameworkCore;
namespace ElectoralManagementSystem.Models;
public class SqLiteDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Filename=./EMS.sqlite");
    }

    public DbSet<Voter> Voters { get; set; }
}
