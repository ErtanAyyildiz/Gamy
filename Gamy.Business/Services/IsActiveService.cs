using Gamy.Business.Abstracts;
using Gamy.Entity.Modals;
using Microsoft.Extensions.Caching.Memory;

namespace Gamy.Business.Services
{
    public class IsActiveService : IIsActiveService
    {
        private readonly IProductService _productService;
        private readonly IMemoryCache _cache;

        public IsActiveService(IProductService productService, IMemoryCache cache)
        {
            _productService = productService;
            _cache = cache;
        }

        public bool IsOneCikanUrunActive(Product product, int oneCikanUrunDuration)
        {
            var cacheKey = $"OneCikanUrunActive_{product.Id}";
            var isCached = _cache.TryGetValue(cacheKey, out bool isActive);

            if (!isCached)
            {
                isActive = true;
                _cache.Set(cacheKey, isActive, DateTimeOffset.Now.AddMinutes(oneCikanUrunDuration));
            }

            return isActive;
        }

        public bool IsVitrinActive(Product product, int vitrinDuration)
        {
            var cacheKey = $"VitrinActive_{product.Id}";
            var isCached = _cache.TryGetValue(cacheKey, out bool isActive);

            if (!isCached)
            {
                isActive = true;
                _cache.Set(cacheKey, isActive, DateTimeOffset.Now.AddMinutes(vitrinDuration));
            }

            return isActive;
        }
    }
}
