﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RestaurantApi.Persistence;

#nullable disable

namespace RestaurantApi.Migrations
{
    [DbContext(typeof(SqlDbContext))]
    [Migration("20220404155835_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("RestaurantApi.Models.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CustomerId"), 1L, 1);

                    b.Property<string>("CustomerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CustomerId");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("RestaurantApi.Models.FoodItem", b =>
                {
                    b.Property<int>("FoodItemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("FoodItemId"), 1L, 1);

                    b.Property<string>("FoodItemName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("FoodItemId");

                    b.ToTable("FoodItems");
                });

            modelBuilder.Entity("RestaurantApi.Models.OrderMaster", b =>
                {
                    b.Property<int>("OrderMasterId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OrderMasterId"), 1L, 1);

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<decimal>("GTotal")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("OrderNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PMethod")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("OrderMasterId");

                    b.HasIndex("CustomerId");

                    b.ToTable("OrderMasters");
                });

            modelBuilder.Entity("RestaurantApi.Models.OrderMasterDetail", b =>
                {
                    b.Property<int>("OrderMasterDetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OrderMasterDetailId"), 1L, 1);

                    b.Property<int>("FoodItemId")
                        .HasColumnType("int");

                    b.Property<decimal>("FoodItemPrice")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("OrderMasterId")
                        .HasColumnType("int");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("OrderMasterDetailId");

                    b.HasIndex("FoodItemId");

                    b.HasIndex("OrderMasterId");

                    b.ToTable("OrderMasterDetails");
                });

            modelBuilder.Entity("RestaurantApi.Models.OrderMaster", b =>
                {
                    b.HasOne("RestaurantApi.Models.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Customer");
                });

            modelBuilder.Entity("RestaurantApi.Models.OrderMasterDetail", b =>
                {
                    b.HasOne("RestaurantApi.Models.FoodItem", "FoodItem")
                        .WithMany()
                        .HasForeignKey("FoodItemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("RestaurantApi.Models.OrderMaster", "OrderMaster")
                        .WithMany("OrderMasterDetails")
                        .HasForeignKey("OrderMasterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("FoodItem");

                    b.Navigation("OrderMaster");
                });

            modelBuilder.Entity("RestaurantApi.Models.OrderMaster", b =>
                {
                    b.Navigation("OrderMasterDetails");
                });
#pragma warning restore 612, 618
        }
    }
}