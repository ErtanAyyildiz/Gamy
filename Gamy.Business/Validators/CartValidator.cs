using FluentValidation;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Validators
{
    public class CartValidator: AbstractValidator<Cart>
    {
        public CartValidator()
        {
            RuleFor(x => x.Id).NotEmpty().WithMessage("ID is required.");
            RuleFor(x => x.Items).Must(x => x != null && x.Count > 0).WithMessage("Cart must have at least one item.");
        }
    }
}
