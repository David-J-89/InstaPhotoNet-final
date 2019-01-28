using AutoMapper;
using InstaPhotoNet.Data;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace InstaPhotoNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Posts2Controller : ControllerBase
    {
        private readonly IPostRepository _repo;
        private readonly IMapper _mapper;

        public Posts2Controller(IPostRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetPhotosIncludingComments()
        {
            var photos = await _repo.GetPhotosIncludingComments();
            //var postsToReturn = _mapper.Map<IEnumerable<PhotoForReturnDto>>(photos);
            return Ok(photos);
        }
    }
}