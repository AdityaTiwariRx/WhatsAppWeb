using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using WhatsApp.UnitOfWork.Main;
using WhatsApp.Models.Main;
using RxWeb.Core.Data;
using WhatsApp.BoundedContext.SqlContext;
using Microsoft.Data.SqlClient;
using WhatsApp.Models.ViewModels;

namespace WhatsApp.Domain.ChatModule
{
    public class vChatDomain : IvChatDomain
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public vChatDomain(IChatUow uow, IDbContextManager<MainSqlDbContext> dbContextManager)
        {
            this.Uow = uow;
            DbContextManager = dbContextManager;
        }



        public async Task<object> GetAsync(vChat parameters)
        {
            await DbContextManager.BeginTransactionAsync();
            var spParameter = new SqlParameter[2];
            spParameter[0] = new SqlParameter()
            {
                ParameterName = "SenderId",
                Value = parameters.SenderId
            };
            spParameter[1] = new SqlParameter()
            {
                ParameterName = "ReceiverId",
                Value = parameters.ReceiverId
            };
            //throw new NotImplementedException();
            var result = await DbContextManager.StoreProc<StoreProcResult>("[dbo].ShowChat ", spParameter);
            return await Task.FromResult(result);
            //throw new NotImplementedException();
        }

        public Task<object> GetBy(vChat parameters)
        {
            throw new NotImplementedException();
        }


        public HashSet<string> AddValidation(vChat entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vChat entity)
        {
            
           await Uow.RegisterNewAsync(entity);
           await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vChat entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vChat entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vChat parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vChat parameters)
        {
            throw new NotImplementedException();
        }

        public IChatUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvChatDomain : ICoreDomain<vChat, vChat> { }
}
