using System.Collections.Generic;
using CloneKabum.API.Models;
using CloneKabum.API.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CloneKabum.API.Controllers
{
    [ApiController]
    [Route("api/v1/products")]
    public class ProductController : ControllerBase
    {

        [HttpGet]
        public ActionResult<List<Product>> GetAll()
        {
            return ProductRepository.GetProducts();
        }

        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id)
        {
            var product = ProductRepository.Get(id);

            if (product == null)
                return NotFound(new { Message = "Produto não encontrado!"});

            return product;
        }

    }
}