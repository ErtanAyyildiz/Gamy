using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.Business.Services
{
    public interface IIsActiveService
    {
        bool IsOneCikanUrunActive(Product product, int oneCikanUrunDuration);
        bool IsVitrinActive(Product product, int vitrinDuration);
    }
}
