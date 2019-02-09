using AutoMapper;
using InstaPhotoNet.Data;
using InstaPhotoNet.Dtos;
using InstaPhotoNet.Helpers;
using InstaPhotoNet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace InstaPhotoNet.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IPostRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IPostRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var users = await _repo.GetUsers(userParams);

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            Response.AddPagination(users.CurrentPage, users.PageSize,
                users.TotalCount, users.TotalPages);

            return Ok(usersToReturn);
        }
        

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);

            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var userFromRepo = await this._repo.GetUser(id);

            if (userFromRepo == null)
                return NotFound($"Cannot find user with ID of {id}");

            if (currentUserId != userFromRepo.Id)
                return Unauthorized();

            this._mapper.Map(userForUpdateDto, userFromRepo);

            if (await this._repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating user {id} failed on save ");
        }

        [HttpPost("{id}/like/{recipientId}")]

        public async Task<IActionResult> LikeUser(int id, int recipientId)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var like = await _repo.GetLike(id, recipientId);

            if (like != null)
                return BadRequest("You already followed this user");

            if (await _repo.GetUser(recipientId) == null)
                return NotFound();

            like = new Models.Like
            {
                LikerId = id,
                LikeeId = recipientId
            };

            _repo.Add<Like>(like);

            if (await _repo.SaveAll())
                return Ok();

            return BadRequest("Failed to follow user");
        }
    }
}