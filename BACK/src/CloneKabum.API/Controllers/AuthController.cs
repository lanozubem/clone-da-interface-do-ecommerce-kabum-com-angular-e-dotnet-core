using System;
using System.Threading.Tasks;
using CloneKabum.API.Helpers;
using CloneKabum.API.Models;
using CloneKabum.API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CloneKabum.API.Controllers
{
    public class AuthController : ControllerBase
    {
        /*
         * Diretor pode ver suas informações e fazer CRUD de funcionarios e gerentes
         * Gerentes podem ver suas informações, fazer CRUD de funcionarios
         * Funcionários podem ver suas informações
         */

        [HttpPost]
        [AllowAnonymous]
        [Route("/api/v1/login")]
        public IActionResult Auth([FromBody] User user)
        {
            try
            {
                //uma boa prática seria usar DI (Injeção de dependência)
                //mas não é o foco do artigo

                var userExists = new UserRepository().GetByEmail(user.Email);

                if (userExists == null)
                    return BadRequest(new { Message = "Email e/ou senha está(ão) inválido(s)." });

                if (userExists.Password != user.Password)
                    return BadRequest(new { Message = "Email e/ou senha está(ão) inválido(s)." });

                var token = JwtAuth.GenerateToken(userExists);

                return Ok(new
                {
                    Token = token,
                    Usuario = userExists
                });

            }
            catch (Exception)
            {
                return BadRequest(new { Message = "Ocorreu algum erro interno na aplicação, por favor tente novamente."});
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("/api/v1/register")]
        public IActionResult RegisterUser([FromBody] User user)
        {
            try
            {
                var userExist = new UserRepository().GetByEmail(user.Email);

                if (userExist is not null)
                    return BadRequest(new { Message = "E-mail Existente" });


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