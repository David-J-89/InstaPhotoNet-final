using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using InstaPhotoNet.Data;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InstaPhotoNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotocommentsController : ControllerBase
    {
        private readonly IPostRepository _repo;
        private readonly IMapper _mapper;

        public PhotocommentsController(IPostRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetPhotosIncludingComments()
        {
            var photocomments = await _repo.GetPhotosIncludingComments();
            return Ok(photocomments);
        }
    }
}
