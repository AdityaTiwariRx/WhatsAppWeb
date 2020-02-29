using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RxWeb.Core.Security;
using RxWeb.Core.Data;

using WhatsApp.Models.ViewModels;
using WhatsApp.BoundedContext.SqlContext;
using WhatsApp.Models.Main;

namespace WhatsApp.Api.Controllers.UserModule
{
    [ApiController]
	[Route("api/[controller]")]
    public class SearchSearchContactController : ControllerBase
    {
        
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public SearchSearchContactController(IDbContextManager<MainSqlDbContext> dbContextManager) {
            DbContextManager = dbContextManager;
        }

		[HttpPost]
        public async Task<IActionResult> Post([FromBody]Dictionary<string,string> searchParams)
        {
            var spParameters = new SqlParameter[2];
            spParameters[0] = new SqlParameter() { ParameterName = "SearchText", Value = searchParams["SearchText"] };
            spParameters[1] = new SqlParameter() { ParameterName = "myId", Value = searchParams["myId"] };
            var result = await DbContextManager.StoreProc<StoreProcResult>("Search ", spParameters);
            return Ok(result.SingleOrDefault()?.Result);
        }
    }
}
