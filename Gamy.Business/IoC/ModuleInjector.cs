using Gamy.Entity.Modals;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Gamy.Business.IoC
{
    public static class ModuleInjector
    {
        public static IServiceCollection AddBusinessServices(this IServiceCollection services)
        {
            //services.AddTransient<IValidator<Project>, ProjectValidator>();

            //services.AddScoped<ICarrierService, CarrierManager>();
            //services.AddScoped<IOrderService, OrderManager>();
            //services.AddScoped<ICarrierConfigurationService, CarrierConfigurationManager>();

            //services.AddScoped<IValidator<Order>, OrderValidator>();
            //services.AddScoped<IValidator<Carrier>, CarriersValidator>();
            //services.AddScoped<IValidator<CarrierConfiguration>, CarrierConfigurationValidator>();

            return services;
        }
    }
}
