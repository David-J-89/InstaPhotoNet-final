using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstaPhotoNet.Dtos
{
    public class CommentDto
    {
        public int Id { get; set; }
        public string Body { get; set; }

        public int PhotoId { get; set; }
    }
}
