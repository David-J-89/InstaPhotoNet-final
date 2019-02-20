using InstaPhotoNet.Helpers;
using InstaPhotoNet.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InstaPhotoNet.Data
{
    public interface IPostRepository
    {
        void Add<T>(T entity) where T : class;

        void Delete<T>(T entity) where T : class;

        Task<bool> SaveAll();

        Task<IEnumerable<Photo>> GetPhotos();

        //Task<IEnumerable<User>> GetUsers2();
        Task<PagedList<User>> GetUsers(UserParams userParams);

        Task<User> GetUser(int id);

        Task<Photo> GetPhoto(int id);

        Task<Photo> GetProfilePhotoForUser(int userId);

        Task<Like> GetLike(int userId, int recipientId);

        Task<IEnumerable<Photo>> GetPhotosIncludingComments();

       // Task<IEnumerable<Comment>> GetCommentsByPhoto(int photoId);
    }
}
