using Gamy.Business.Abstracts;

namespace Gamy.Business.Services
{
    public class BalanceService
    {
        private readonly IAppUserService _appUserService;

        public BalanceService(IAppUserService appUserService)
        {
            _appUserService = appUserService;
        }

        //string merchantId = "MERCHANT_ID";
        //string merchantKey = "MERCHANT_KEY";

        //// PayTR API istemcisi
        //PaytrClient client = new PaytrClient(merchantId, merchantKey);

        //// Kullanıcının cüzdan bakiyesini yükleme işlemi
        //public void LoadBalance(User user, decimal amount)
        //{
        //    // Kullanıcının bakiyesini artırmak için veritabanına kaydedin
        //    user.Balance += amount;
        //    _db.SaveChanges();
        //}
        //// Ödeme işlemi gerçekleştiren yöntem
        //public bool MakePayment(User user, decimal amount)
        //{
        //    // Kullanıcının bakiyesi ödenecek tutardan büyük veya eşit olmalıdır
        //    if (user.Balance < amount)
        //    {
        //        return false;
        //    }

        //    // PayTR API'si için gerekli parametreleri ayarlayın
        //    var request = new PaymentRequest
        //    {
        //        Amount = amount,
        //        OrderId = Guid.NewGuid().ToString(),
        //        Currency = "TRY",
        //        SuccessUrl = "https://example.com/success",
        //        ErrorUrl = "https://example.com/error",
        //        Installment = 1,
        //        UserIp = "127.0.0.1",
        //        CardHolderName = user.Name,
        //        CardNumber = "XXXXXXXXXXXX",
        //        CardExpireMonth = "XX",
        //        CardExpireYear = "XXXX",
        //        Cvc = "XXX",
        //        CardType = CardType.Visa
        //    };

        //    // PayTR API'si aracılığıyla ödeme işlemini gerçekleştirin
        //    var response = client.MakePayment(request);

        //    // Ödeme durumu kodunu ve açıklamasını kontrol edin
        //    if (response.Status != PaymentStatus.Ok)
        //    {
        //        return false;
        //    }

        //    // Kullanıcının bakiyesini güncelleyin ve veritabanına kaydedin
        //    user.Balance -= amount;
        //    _db.SaveChanges();

        //    return true;
        //}
    }
}
