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
    public class StatusContext : BaseBoundedContext, IStatusContext
    {
        public StatusContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<vStatu> vStatus { get; set; }
		public DbSet<Status> Status { get; set; }
		public DbSet<SeenStatu> SeenStatu { get; set; }
		public DbSet<vStatu> vStatu { get; set; }
		public DbSet<vStatusSeen> vStatusSeen { get; set; }
            		
            #endregion DbSets



    }


    public interface IStatusContext : IDbContext
    {
    }
}

