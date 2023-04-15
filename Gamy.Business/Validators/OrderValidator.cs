using FluentValidation;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Validators
{
    public class OrderValidator : AbstractValidator<Order>
    {
        public OrderValidator()
        {
            RuleFor(o => o.CustomerId).NotEmpty().WithMessage("Müşteri ID boş olamaz");
            RuleFor(o => o.TotalPrice).GreaterThan(0).WithMessage("Toplam fiyat 0'dan büyük olmalıdır");
            RuleFor(o => o.OrderDate).NotEmpty().WithMessage("Sipariş tarihi boş olamaz");
        }
    }
}
