using Microsoft.AspNetCore.Mvc;
using System.Linq;
using WhatsApp.UnitOfWork.Main;
using WhatsApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;
using System.Threading.Tasks;

namespace WhatsApp.Api.Controllers.CountryLookupModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CountryLookupsController : BaseLookupController

    {
        public CountryLookupsController(ICountryLookupUow uow):base(uow) {}

        #region Lookups

        [HttpGet("CountryLookups")]
        public async Task<object> GetAsync()
        {
            return await Uow.Repository<vCountryLookup>().AllAsync();
        }


        #endregion Lookups
    }
}
