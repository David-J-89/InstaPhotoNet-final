using AutoMapper;
using InstaPhotoNet.Data;
using InstaPhotoNet.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InstaPhotoNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IPostRepository _repo;

        public PostsController(IPostRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetPhotos()
        {
            var photos = await _repo.GetPhotos();
            //var result = photos.(x => new PhotoForReturnDto(x)).ToListAsync();

            var postsToReturn = _mapper.Map<IEnumerable<PhotoForReturnDto>>(photos);

            return Ok(postsToReturn);



        }
    }
}