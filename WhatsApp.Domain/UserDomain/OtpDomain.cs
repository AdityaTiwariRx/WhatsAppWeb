using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using WhatsApp.UnitOfWork.Main;
using WhatsApp.Models.Main;
using System.Net;
using System.Diagnostics;

namespace WhatsApp.Domain.UserModule
{
    public class OtpDomain : IOtpDomain
    {
        public OtpDomain(IUserUow uow) {
            this.Uow = uow;
        }

        public async Task<object> GetAsync(Otp parameters)
        {
            //throw new NotImplementedException();
            return await Uow.Repository<Otp>().AllAsync();
        }

        public Task<object> GetBy(Otp parameters)
        {

            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(Otp entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(Otp entity)
        {
            //Generate Otp
            var temp= Uow.Repository<Otp>().Count(t => t.UserId == entity.UserId);
            if(temp!=0)
            {
                var candidate = Uow.Repository<Otp>().FindBy(t => t.UserId == entity.UserId); 
                await Uow.RegisterDeletedAsync(candidate);
                await Uow.CommitAsync();
            }
            Random rnd = new Random();
            string randomNumber = (rnd.Next(100000, 999999)).ToString();
            entity.OtpCode = Int32.Parse(randomNumber);
            //Otp send via msg


            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();


        }
           
           

        public HashSet<string> UpdateValidation(Otp entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(Otp entity)
        {
            Random rnd = new Random();
            string randomNumber = (rnd.Next(100000, 999999)).ToString();
            entity.OtpCode = Int32.Parse(randomNumber);
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

    public interface IOtpDomain : ICoreDomain<Otp, Otp> { }
}
