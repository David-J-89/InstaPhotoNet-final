namespace InstaPhotoNet.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Body { get; set; }

        public Photo Photo { get; set; }
        public int PhotoId { get; set; }
    }
}
