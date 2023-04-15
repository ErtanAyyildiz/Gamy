using FluentValidation;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Validators
{
    public class CartItemValidator:AbstractValidator<CartItem>
    {
        public CartItemValidator()
        {
            RuleFor(x => x.Quantity)
                .GreaterThan(0).WithMessage("Quantity must be greater than 0.")
                .LessThanOrEqualTo(10).WithMessage("Quantity cannot be greater than 10.");

            RuleFor(x => x.CartId)
                .NotEmpty().WithMessage("Cart ID cannot be empty.");

            RuleFor(x => x.ProductId)
                .NotEmpty().WithMessage("Product ID cannot be empty.");

            RuleFor(x => x.Price)
                .GreaterThan(0).WithMessage("Price must be greater than 0.");
        }
    }
}
