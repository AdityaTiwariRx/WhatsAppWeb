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
    public class ChatContext : BaseBoundedContext, IChatContext
    {
        public ChatContext(MainSqlDbContext sqlDbContext,  IOptions<DatabaseConfig> databaseConfig, IHttpContextAccessor contextAccessor,ITenantDbConnectionInfo tenantDbConnection): base(sqlDbContext, databaseConfig.Value, contextAccessor,tenantDbConnection){ }

            #region DbSets
            		public DbSet<Chat> Chat { get; set; }
		public DbSet<ChatAttachment> ChatAttachment { get; set; }
		public DbSet<ChatContent> ChatContent { get; set; }
		
		public DbSet<vChat> vChat { get; set; }
            		public DbSet<vStatu> vStatus { get; set; }
            #endregion DbSets



    }


    public interface IChatContext : IDbContext
    {
    }
}

