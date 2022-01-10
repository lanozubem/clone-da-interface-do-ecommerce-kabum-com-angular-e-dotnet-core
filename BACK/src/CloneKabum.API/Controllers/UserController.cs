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
    }
}