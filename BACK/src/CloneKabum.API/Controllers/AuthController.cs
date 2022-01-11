using System;
using System.Threading.Tasks;
using CloneKabum.API.Models;
using CloneKabum.API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CloneKabum.API.Controllers
{
    public class AuthController : ControllerBase
    {

        [HttpPost]
        [Route("/api/v1/login")]
        public IActionResult Auth([FromBody] User user)
        {
            try
            {
                var userExists = new UserRepository().GetByEmail(user.Email);

                if (userExists == null)
                    return BadRequest(new { Message = "Email e/ou senha está(ão) inválido(s)." });

                if (userExists.Password != user.Password)
                    return BadRequest(new { Message = "Email e/ou senha está(ão) inválido(s)." });

                return Ok(userExists);
            }
            catch (Exception)
            {
                return BadRequest(new { Message = "Ocorreu algum erro interno na aplicação, por favor tente novamente." });
            }
        }

        [HttpPost]
        [Route("/api/v1/register")]
        public IActionResult RegisterUser([FromBody] User user)
        {
            try
            {
                var userExist = new UserRepository().GetByEmail(user.Email);

                if (userExist is not null)
                    return BadRequest(new { Message = "E-mail Existente." });

                UserRepository.AddUser(user);
                return CreatedAtAction(nameof(RegisterUser), new { id = user.Id }, user);
            }
            catch (Exception)
            {
                return BadRequest(new { Message = "Ocorreu algum erro interno na aplicação, por favor tente novamente." });
            }
        }

    }
}