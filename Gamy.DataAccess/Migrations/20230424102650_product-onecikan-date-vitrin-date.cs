using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gamy.DataAccess.Migrations
{
    public partial class productonecikandatevitrindate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "OneCikanDateTime",
                table: "Products",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "VitrinDateTime",
                table: "Products",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OneCikanDateTime",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "VitrinDateTime",
                table: "Products");
        }
    }
}
