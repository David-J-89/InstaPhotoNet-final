using InstaPhotoNet.Helpers;
using InstaPhotoNet.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstaPhotoNet.Data
{
    public class PostRepository : IPostRepository
    {
        private readonly DataContext _context;

        public PostRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public IQueryable<Comment> GetCommentsByPhoto(int photoId)
        {
            var commentsbphoto = _context.Comments.Where(r => r.PhotoId == photoId);
            return commentsbphoto;
        }

        public async Task<Like> GetLike(int userId, int recipientId)
        {
            return await _context.Likes.FirstOrDefaultAsync(u =>
            u.LikerId == userId && u.LikeeId == recipientId);
        }

        public async Task<Photo> GetPhoto(int id)
        {
            var photo = await _context.Photos.FirstOrDefaultAsync(p => p.Id == id);

            return photo;
        }

        public async Task<IEnumerable<Photo>> GetPhotos()
        {
            //var photos = await _context.Photos.Include(c => c.Comments).ToListAsync();
            var photos = await _context.Photos.Include(c => c.User).ToListAsync();

            return photos;

           

        }

        public async Task<IEnumerable<Photo>> GetPhotosIncludingComments()
        {
            var photosic = await _context.Photos.Include(c => c.Comments).ToListAsync();
            return photosic;
        }

        
        public async Task<Photo> GetProfilePhotoForUser(int userId)
        {
            return await _context.Photos.Where(u => u.UserId == userId)
                .FirstOrDefaultAsync(p => p.IsProfile);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }
        

        public async Task<PagedList<User>> GetUsers(UserParams userParams)
        {
            var users = _context.Users.Include(p => p.Photos)
                    .OrderByDescending(u => u.LastActive).AsQueryable();

            users = users.Where(u => u.Id != userParams.UserId);

            if (userParams.Likers)
            {
                var userLikers = await GetUserLikes(userParams.UserId, userParams.Likers);
                users = users.Where(u => userLikers.Contains(u.Id));
            }

            if (userParams.Likees)
            {
                var userLikees = await GetUserLikes(userParams.UserId, userParams.Likers);
                users = users.Where(u => userLikees.Contains(u.Id));
            }
            
            if (!string.IsNullOrEmpty(userParams.OrderBy))
            {
                switch (userParams.OrderBy)
                {
                    case "lastactive":
                        users = users.OrderByDescending(u => u.LastActive);
                        break;
                    default:
                        users = users.OrderByDescending(u => u.Id);
                        break;
                }
            }

            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        private async Task<IEnumerable<int>> GetUserLikes(int id, bool likers)
        {
            var user = await _context.Users
                .Include(x => x.Likers)
                .Include(x => x.Likees)
                .FirstOrDefaultAsync(u => u.Id == id);

            if (likers)
            {
                return user.Likers.Where(u => u.LikeeId == id).Select(i => i.LikerId);
            }
            else
            {
                return user.Likees.Where(u => u.LikerId == id).Select(i => i.LikeeId);
            }
        }

        

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        //Task<IEnumerable<Comment>> IPostRepository.GetCommentsByPhoto(int photoId)
        //{
        //    var commentrep = _context.Photos.Where(r => r.Id == photoId).ToListAsync();
        //    return commentrep;
        //}

        //IQueryable<Photo> IPostRepository.GetPhotosIncludingComments()
        //{
        //    var commentsbphoto = _context.Photos.Include("Comments");
        //    return commentsbphoto;
        //}
    }
}
