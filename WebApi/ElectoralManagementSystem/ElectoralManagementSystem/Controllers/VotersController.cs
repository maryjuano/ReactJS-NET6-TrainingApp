using ElectoralManagementSystem.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ElectoralManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VotersController : ControllerBase
    {
        private readonly SqLiteDbContext _sqLiteDbContext;

        public VotersController(SqLiteDbContext sqLiteDbContext)
        {
            this._sqLiteDbContext = sqLiteDbContext;
        }

        // GET: api/<VotersController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _sqLiteDbContext.Voters.ToListAsync());
        }

        // GET api/<VotersController>/5
        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var voter = await _sqLiteDbContext.Voters.FindAsync(id);
            if (voter == null)
            {
                return NoContent();
            }
            return Ok(voter);
        }

        // POST api/<VotersController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Voter newVoter)
        {
            _sqLiteDbContext.Voters.Add(newVoter);
            await _sqLiteDbContext.SaveChangesAsync();
            return Ok();
        }

        // PUT api/<VotersController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, [FromBody] Voter newVoter)
        {
            if (id != newVoter.Id)
            {
                return BadRequest();
            }         

            _sqLiteDbContext.Entry(newVoter).State = EntityState.Modified;

            try
            {
                await _sqLiteDbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {               
                if (_sqLiteDbContext.Voters.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        // DELETE api/<VotersController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var customer = await _sqLiteDbContext.Voters.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            _sqLiteDbContext.Voters.Remove(customer);
            await _sqLiteDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
