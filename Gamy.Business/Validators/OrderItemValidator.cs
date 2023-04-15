using FluentValidation;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Validators
{
    public class OrderItemValidator:AbstractValidator<OrderItem>
    {
        public OrderItemValidator()
        {
            RuleFor(x => x.OrderId).NotEmpty().WithMessage("Order ID cannot be empty.");
            RuleFor(x => x.ProductId).NotEmpty().WithMessage("Product ID cannot be empty.");
            RuleFor(x => x.Quantity).GreaterThan(0).WithMessage("Order item quantity must be greater than zero.");
            RuleFor(x => x.Price).GreaterThan(0).WithMessage("Order item price must be greater than zero.");
        }
    }
}
