using Gamy.Entity.Modals;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gamy.DataAccess.Migrations
{
    public partial class addedm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Category>(
                name: "CategoryImageUrl",
                table: "Categories");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryImageUrl",
                table: "Categories");
        }
    }
}
