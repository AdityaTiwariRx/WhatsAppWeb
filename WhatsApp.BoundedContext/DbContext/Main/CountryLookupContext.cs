using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using WhatsApp.BoundedContext.SqlContext;
using WhatsApp.Models.Main;
using WhatsApp.Models;
using WhatsApp.BoundedContext.Singleton;
using RxWeb.Core.Data;
using RxWeb.Core.Data.Models;
using RxWeb.Core.Data.BoundedContext;

namespace WhatsApp.BoundedContext.Main
{
    public class CountryLookupContext : BaseBoundedContext, ICountryLookupContext
    {
        public CountryLookupContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<vCountryLookup> vCountryLookups { get; set; }
            #endregion DbSets


    }


    public interface ICountryLookupContext : IDbContext
    {
    }
}

