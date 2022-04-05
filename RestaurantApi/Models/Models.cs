using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestaurantApi.Models;

public class Customer
{
    [Key]
    public int CustomerId { get; set; }
    public string CustomerName { get; set; }
}


public class FoodItem
{
    [Key]
    public int FoodItemId { get; set; }
    public string FoodItemName { get; set; }
    public decimal Price { get; set; }
}


public class OrderMaster
{
    [Key]
    public int OrderMasterId { get; set; }
    public string OrderNumber { get; set; }
    public int CustomerId { get; set; }
    public Customer Customer { get; set; }
    public string PMethod { get; set; }
    public decimal GTotal { get; set; }
    public List<OrderMasterDetail> OrderMasterDetails { get; set; } = new List<OrderMasterDetail>();  
}

public class OrderMasterDetail
{   
    [Key]
    public int OrderMasterDetailId { get; set; }
    public int OrderMasterId { get; set; }
    public OrderMaster OrderMaster { get; set; }
    public int FoodItemId { get; set; }
    public FoodItem FoodItem { get; set; }
    public decimal FoodItemPrice { get; set; }
    public int Quantity { get; set; }
}


