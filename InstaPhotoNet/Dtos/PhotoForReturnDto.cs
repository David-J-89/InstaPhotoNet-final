using System;
using System.Collections.Generic;

namespace InstaPhotoNet.Dtos
{
    public class PhotoForReturnDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsProfile { get; set; }
        public string PublicId { get; set; }
        public int UserId { get; set; }        
        public string UserKnownAs { get; set; }
        public string UserUserName { get; set; }
        public string UserPhotoUrl { get; set; }
        public ICollection<CommentDto> Comments { get; set; }
        

    }
}
