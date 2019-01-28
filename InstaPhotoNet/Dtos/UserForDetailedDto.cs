using System;
using System.Collections.Generic;

namespace InstaPhotoNet.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string KnownAs { get; set; }

        public DateTime LastActive { get; set; }

        public string Bio { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string PhotoUrl { get; set; }

        public ICollection<PhotosForDetailedDto> Photos { get; set; }
    }
}
