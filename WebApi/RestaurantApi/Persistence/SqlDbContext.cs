using Microsoft.EntityFrameworkCore;
using RestaurantApi.Models;

namespace RestaurantApi.Persistence;

public class SqlDbContext : DbContext
{
    public SqlDbContext(DbContextOptions<SqlDbContext> dbContextOptions) : base(dbContextOptions)   
    {

    }

    public DbSet<Customer> Customers { get; set; }
    public DbSet<OrderMaster> OrderMasters { get; set; }
    public DbSet<OrderMasterDetail> OrderMasterDetails { get; set; }
    public DbSet<FoodItem> FoodItems { get; set; }
}
