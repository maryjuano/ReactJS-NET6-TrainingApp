// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

List<BasketItemsDto> existingItem = new List<BasketItemsDto>()
{
    new BasketItemsDto() { Id = 1, SkuCode = "ABCD" },
    new BasketItemsDto() { Id = 2, SkuCode = "ABCDE" },
};

List<BasketItemsDto> newItems = new List<BasketItemsDto>()
{
    new BasketItemsDto() { Id = 1, SkuCode = "ABCD" },
    new BasketItemsDto() { Id = 1, SkuCode = "ABCDE" },
    new BasketItemsDto() { Id = 2, SkuCode = "CDE" },
};

var result = newItems.Except(existingItem, new DataItemDataComparer()).ToList();

foreach (var item in result)
{
    Console.WriteLine($"Id : {item.Id} SKU: {item.SkuCode}");
}

Console.WriteLine("Common:");

var result1 = newItems.Intersect(existingItem, new DataItemDataComparer()).ToList();

foreach (var item in result1)
{
    Console.WriteLine($"Id : {item.Id} SKU: {item.SkuCode}");
}


Console.ReadLine();


public class BasketItemsDto
{
    public int Id { get; set; }
    public string SkuCode { get; set; }
   
}

public class DataItemDataComparer : IEqualityComparer<BasketItemsDto>
{
    public bool Equals(BasketItemsDto x, BasketItemsDto y)
    {
        return string.Equals(x.SkuCode, y.SkuCode);
    }

    public int GetHashCode(BasketItemsDto obj)
    {
        return obj.SkuCode.GetHashCode();
    }
}