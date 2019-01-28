using System.ComponentModel.DataAnnotations;

namespace InstaPhotoNet.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(18, MinimumLength = 4, ErrorMessage = "You must specify a password of between 4 and 18 characters.")]
        public string Password { get; set; }
    }
}
