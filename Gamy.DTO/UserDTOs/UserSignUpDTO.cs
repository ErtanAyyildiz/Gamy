using System.ComponentModel.DataAnnotations;

namespace Gamy.DTO.UserDTOs
{
    public class UserSignUpDTO
    {
        [Display(Name ="Kullanıcı Adı")]
        [Required(ErrorMessage = "Lütfen Kullanıcı Adı giriniz")]
        public string UserName { get; set; }

        [Display(Name = "Email")]
        [Required(ErrorMessage = "Lütfen Email giriniz")]
        public string Email { get; set; }

        [Display(Name = "Email Tekrar")]
        [Compare("Email", ErrorMessage = "Mail Adresleri uyuşmuyor")]
        public string ConfirmEmail { get; set; }

        [Display(Name = "Parola")]
        [Required(ErrorMessage = "Lütfen Parola giriniz")]
        public string Password { get; set; }

        [Display(Name = "Parola Tekrar")]
        [Compare("Password",ErrorMessage = "Parolalar uyuşmuyor")]
        public string ConfirmPassword { get; set; }

        [Display(Name = "NameSurname")]
        [Required(ErrorMessage = "Lütfen Adınız ve Soyadınızı giriniz")]
        public string NameSurname { get; set; }

        [Display(Name = "Phone")]
        [Required(ErrorMessage = "Lütfen Telefon Numaranızı giriniz")]
        public string Phone { get; set; }

        [Display(Name = "BirthDateTime")]
        [Required(ErrorMessage = "Lütfen Doğum Tarihini giriniz")]
        public DateTime BirthDateTime { get; set; }
    }
}
