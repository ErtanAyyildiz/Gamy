﻿using Gamy.DataAccess.Repositories.IRepositories;
using Gamy.Entity.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamy.DataAccess.Abstracts
{
    public interface IOrderDal:IRepository<Order>
    {
        Task<Order> GetOrderByIdAsync(int id);
        Task<List<Order>> GetOrdersByCustomerIdAsync(string customerId);
        Task<Order> CreateOrderAsync(Order order);
        Task<Order> UpdateOrderAsync(Order order);
        Task DeleteOrderAsync(int id);
    }
}
