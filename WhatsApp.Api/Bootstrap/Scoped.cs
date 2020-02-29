#region Namespace
using Microsoft.Extensions.DependencyInjection;
using WhatsApp.Infrastructure.Security;
using RxWeb.Core.Data;
using RxWeb.Core.Security;
using RxWeb.Core.Annotations;
using RxWeb.Core;
using WhatsApp.UnitOfWork.DbEntityAudit;
using WhatsApp.BoundedContext.Main;
using WhatsApp.UnitOfWork.Main;
using WhatsApp.Domain.UserModule;
            using WhatsApp.Domain.ChatModule;
            using WhatsApp.Domain.StatusModule;
            #endregion Namespace






namespace WhatsApp.Api.Bootstrap
{
    public static class ScopedExtension
    {

        public static void AddScopedService(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IRepositoryProvider, RepositoryProvider>();
            serviceCollection.AddScoped<ITokenAuthorizer, TokenAuthorizer>();
            serviceCollection.AddScoped<IModelValidation, ModelValidation>();
            serviceCollection.AddScoped<IAuditLog, AuditLog>();
            serviceCollection.AddScoped<IApplicationTokenProvider, ApplicationTokenProvider>();
            serviceCollection.AddScoped(typeof(IDbContextManager<>), typeof(DbContextManager<>));

            #region ContextService

            serviceCollection.AddScoped<ILoginContext, LoginContext>();
            serviceCollection.AddScoped<ILoginUow, LoginUow>();
                        serviceCollection.AddScoped<IUserContext, UserContext>();
            serviceCollection.AddScoped<IUserUow, UserUow>();
                       
                        serviceCollection.AddScoped<IChatContext, ChatContext>();
            serviceCollection.AddScoped<IChatUow, ChatUow>();
                        serviceCollection.AddScoped<IStatusContext, StatusContext>();
            serviceCollection.AddScoped<IStatusUow, StatusUow>();
                        serviceCollection.AddScoped<ICountryLookupContext, CountryLookupContext>();
            serviceCollection.AddScoped<ICountryLookupUow, CountryLookupUow>();
            #endregion ContextService








            #region DomainService

            
            serviceCollection.AddScoped<IUserDomain, UserDomain>();
            
            serviceCollection.AddScoped<IOtpDomain, OtpDomain>();
            
            serviceCollection.AddScoped<ICheckOtpDomain, CheckOtpDomain>();
            
            serviceCollection.AddScoped<IUserDetailDomain, UserDetailDomain>();
            
            serviceCollection.AddScoped<IChatDomain, ChatDomain>();
            
            serviceCollection.AddScoped<IMyContactDomain, MyContactDomain>();
            
            serviceCollection.AddScoped<IvChatDomain, vChatDomain>();
            
            serviceCollection.AddScoped<IvChatDomain, vChatDomain>();
            
            serviceCollection.AddScoped<IMyContactDomain, MyContactDomain>();
            
            serviceCollection.AddScoped<IMyContactDomain, MyContactDomain>();
            
            serviceCollection.AddScoped<IChatContentDomain, ChatContentDomain>();
            
            serviceCollection.AddScoped<IStatusDomain, StatusDomain>();
            
            serviceCollection.AddScoped<IStatusDomain, StatusDomain>();
            
            serviceCollection.AddScoped<IvStatuDomain, vStatuDomain>();
            #endregion DomainService














        }
    }
}




