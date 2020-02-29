using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using WhatsApp.UnitOfWork.Main;
using WhatsApp.Models.Main;


namespace WhatsApp.Domain.UserModule
{
    public class CheckOtpDomain : ICheckOtpDomain
    {
        public CheckOtpDomain(IUserUow uow)
        {
            this.Uow = uow;  
        }

        public  Task<object> GetAsync(Otp parameters)
        {
            
            
            throw new NotImplementedException();
        }

        public async Task<object> GetBy(Otp parameters)
        {
            var temp = 0;
            temp = Uow.Repository<Otp>().Count(t => t.OtpCode == parameters.OtpCode && t.UserId == parameters.UserId);

            if (temp != 0)
            {
                return await Task.FromResult("Matched Succefully");
            }
            else
            {
                return await Task.FromResult("Not Matched ");
            }
            
            //throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(Otp entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Otp entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();

        }

        public HashSet<string> UpdateValidation(Otp entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Otp entity)
        {

            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(Otp parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(Otp parameters)
        {
            throw new NotImplementedException();
        }

        public IUserUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface ICheckOtpDomain : ICoreDomain<Otp,Otp> { }
}
