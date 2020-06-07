using Microsoft.AspNetCore.Mvc;
using System.Linq;
using WhatsApp.Domain.UserModule;
using WhatsApp.Models.Main;
using RxWeb.Core.AspNetCore;
using RxWeb.Core.Security.Authorization;

namespace WhatsApp.Api.Controllers.UserModule
{
    [ApiController]
    [Route("api/[controller]")]
	
	public class CheckOtpController : BaseDomainController<Otp, Otp>

    {
        public CheckOtpController(ICheckOtpDomain domain):base(domain) {}

    }
}