using FluentValidation;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Validators
{
    public class ProductValidator:AbstractValidator<Product>
    {
        public ProductValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Product name cannot be empty.");
            RuleFor(x => x.Name).MaximumLength(100).WithMessage("Product name cannot exceed 100 characters.");
            RuleFor(x => x.Description).MaximumLength(500).WithMessage("Product description cannot exceed 500 characters.");
            RuleFor(x => x.Price).GreaterThan(0).WithMessage("Product price must be greater than zero.");
            RuleFor(x => x.StockAmount).GreaterThan(0).WithMessage("Product stock amount must be greater than zero.");
            //RuleFor(x => x.SubCategoryId).NotEmpty().WithMessage("Product category ID cannot be empty.");
        }
    }
}
