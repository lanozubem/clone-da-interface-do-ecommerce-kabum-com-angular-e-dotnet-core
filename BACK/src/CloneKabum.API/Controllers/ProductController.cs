using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CloneKabum.API.Models;
using CloneKabum.API.Services;

namespace CloneKabum.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Product>> GetAll()
        {
            return ProductService.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id)
        {
            var product = ProductService.Get(id);

            if (product == null)
                return NotFound();

            return product;
        }

        [HttpPost]
        public IActionResult Create(Product product)
        {
            ProductService.Add(product);
            return CreatedAtAction(nameof(Create), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Product product)
        {
            if (id != product.Id)
                return BadRequest();

            var existingProduct = ProductService.Get(id);
            if (existingProduct is null)
                return NotFound();

            ProductService.Update(product);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = ProductService.Get(id);

            if (product is null)
                return NotFound();

            ProductService.Delete(id);

            return NoContent();
        }

    }
}
