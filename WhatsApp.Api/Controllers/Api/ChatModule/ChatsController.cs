using Microsoft.AspNetCore.Mvc;
using System.Linq;
using WhatsApp.Domain.ChatModule;
using WhatsApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace WhatsApp.Api.Controllers.ChatModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class ChatsController : BaseDomainController<Chat,Chat>

    {
        public ChatsController(IChatDomain domain):base(domain) {}

    }
}
