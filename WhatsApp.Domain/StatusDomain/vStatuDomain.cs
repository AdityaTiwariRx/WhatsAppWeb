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


namespace WhatsApp.Domain.StatusModule
{
    public class vStatuDomain : IvStatuDomain
    {
        private IDbContextManager<MainSqlDbContext> DbContextManager { get; set; }
        public vStatuDomain(IStatusUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(vStatu parameters)
        {
/*
            await DbContextManager.BeginTransactionAsync();
            var spParameter = new SqlParameter[1];
            spParameter[0] = new SqlParameter()
            {
                ParameterName = "UsercontactId",
                Value = parameters.UsercontactId
            };

            //throw new NotImplementedException();
            var result = await DbContextManager.StoreProc<StoreProcResult>("[dbo].sp_status ", spParameter);
            return await Task.FromResult(result);*/
            //throw new NotImplementedException();
            return await Uow.Repository<vStatu>().FindByAsync(t=>t.UsercontactId==parameters.UsercontactId && (t.CreatedTime.AddHours(24))>DateTime.Now);

        }

        public Task<object> GetBy(vStatu parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(vStatu entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(vStatu entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(vStatu entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(vStatu entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(vStatu parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(vStatu parameters)
        {
            throw new NotImplementedException();
        }

        public IStatusUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IvStatuDomain : ICoreDomain<vStatu, vStatu> { }
}
