using System;
using System.Collections.Generic;

namespace InstaPhotoNet.Models
{
    public class Photo
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }

        public DateTime DateAdded { get; set; }

        public bool IsProfile { get; set; }

        public string PublicId { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        //public string UserKnownAs { get; set; }

        //public string UserName { get; set; }

        public ICollection<Comment> Comments { get; set; }





        //public string UserKnownAs { get; set; }


        //public int NetLikeCount { get; set; }

        //public ICollection<PhotoLike> PhotoLikes { get; set; }

        //public ICollection<PhotoTag> PhotoTags { get; set; }

    }
}
