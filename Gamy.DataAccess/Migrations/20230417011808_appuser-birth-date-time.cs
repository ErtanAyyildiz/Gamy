using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gamy.DataAccess.Migrations
{
    public partial class appuserbirthdatetime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "BirthDateTime",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirthDateTime",
                table: "AspNetUsers");
        }
    }
}
