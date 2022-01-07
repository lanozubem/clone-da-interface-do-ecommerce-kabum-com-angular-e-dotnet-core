using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CloneKabum.API.Controllers
{
    public class UserController : ControllerBase
    {
        [HttpGet]
        [Route("/api/v1/user/employee")]
        [Authorize]
        public IActionResult GetEmployeee()
        {
            return Ok("Olá " + User.Identity.Name + " rota aberta a todos os colaboradores.");
        }

        [HttpGet]
        [Route("/api/v1/user/manager")]
        [Authorize(Roles = "Director,Manager")]
        public IActionResult GetManager()
        {
            return Ok("Está logado como gerente: " + User.Identity.Name);
        }


        [HttpGet]
        [Route("/api/v1/user/director")]
        [Authorize(Roles = "Director")]
        public IActionResult GetDirector()
        {
            return Ok("Está logado como diretor: " + User.Identity.Name);
        }
    }
}