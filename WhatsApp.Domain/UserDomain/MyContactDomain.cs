using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using WhatsApp.UnitOfWork.Main;
using WhatsApp.Models.Main;

namespace WhatsApp.Domain.UserModule
{
    public class MyContactDomain : IMyContactDomain
    {
        public MyContactDomain(IUserUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(MyContact parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(MyContact parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(MyContact entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(MyContact entity)
        {
            var count = 0;
            count = Uow.Repository<User>().Count(t => t.UserMobileNumber == 7405755503);
            var temp = Uow.Repository<User>().SingleOrDefault(t => t.UserMobileNumber == 1233);
            if (count!=0)
            {
                entity.UsercontactId = temp.UserId;
                await Uow.RegisterNewAsync(entity);
                await Uow.CommitAsync();
            }
            
        }

        public HashSet<string> UpdateValidation(MyContact entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(MyContact entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(MyContact parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(MyContact parameters)
        {
            throw new NotImplementedException();
        }

        public IUserUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IMyContactDomain : ICoreDomain<MyContact, MyContact> { }
}
