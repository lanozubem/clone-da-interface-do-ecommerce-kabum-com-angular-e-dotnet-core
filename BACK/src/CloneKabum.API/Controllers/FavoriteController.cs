using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloneKabum.API.Models;
using CloneKabum.API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CloneKabum.API.Controllers
{
    [ApiController]
    [Route("api/v1/Favorite")]
    public class FavoriteController : ControllerBase
    {

        [HttpPost("{id}")]
        public IActionResult AddFavorite(int userId, int productId)
        {
            try
            {
                var userExist = new UserRepository().Get(userId);
                if (userExist is null)
                    return BadRequest(new { Message = "O usuário não existe!" });

                var productExist = ProductRepository.Get(productId);
                if (productExist is null)
                    return BadRequest(new { Message = "O produto não existe!" });

                UserRepository.AddFavoritProduct(userId, productId);
                return NoContent();
            }
            catch (Exception)
            {
                return BadRequest(new { Message = "Ocorreu algum erro interno na aplicação, por favor tente novamente." });
            }
        }

        [HttpGet("{id}")]
        public ActionResult<List<Product>> GetFavorits(int userId)
        {
            var userExist = new UserRepository().Get(userId);
            var favoritesProducts = new UserRepository().GetFavorits(userId);

            if (userExist is null)
                return NotFound();

            return favoritesProducts;
        }

        [HttpDelete("{id}")]
        public IActionResult RemoveFavoriteProduct(int userId, int productId)
        {
            try
            {
                var userExist = new UserRepository().Get(userId);
                if (userExist is null)
                    return BadRequest(new { Message = "O usuário não existe!" });

                var productExist = ProductRepository.Get(productId);
                if (productExist is null)
                    return BadRequest(new { Message = "O produto não existe!" });

                UserRepository.RemoveFavoriteProduct(userId, productId);
                return NoContent();
            }
            catch (Exception)
            {
                return BadRequest(new { Message = "Ocorreu algum erro interno na aplicação, por favor tente novamente." });
            }
        }
    }
}