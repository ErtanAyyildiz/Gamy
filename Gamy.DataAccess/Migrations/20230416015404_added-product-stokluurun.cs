using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gamy.DataAccess.Migrations
{
    public partial class addedproductstokluurun : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "StokluUrun",
                table: "Products",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StokluUrun",
                table: "Products");
        }
    }
}
