using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RxWeb.Core;
using WhatsApp.UnitOfWork.Main;
using WhatsApp.Models.Main;

namespace WhatsApp.Domain.ChatModule
{
    public class ChatContentDomain : IChatContentDomain
    {
        public ChatContentDomain(IChatUow uow) {
            this.Uow = uow;
        }

        public Task<object> GetAsync(ChatContent parameters)
        {
            throw new NotImplementedException();
        }

        public Task<object> GetBy(ChatContent parameters)
        {
            throw new NotImplementedException();
        }
        

        public HashSet<string> AddValidation(ChatContent entity)
        {
            return ValidationMessages;
        }

        public async Task AddAsync(ChatContent entity)
        {
            await Uow.RegisterNewAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> UpdateValidation(ChatContent entity)
        {
            return ValidationMessages;
        }

        public async Task UpdateAsync(ChatContent entity)
        {
            await Uow.RegisterDirtyAsync(entity);
            await Uow.CommitAsync();
        }

        public HashSet<string> DeleteValidation(ChatContent parameters)
        {
            return ValidationMessages;
        }

        public Task DeleteAsync(ChatContent parameters)
        {
            throw new NotImplementedException();
        }

        public IChatUow Uow { get; set; }

        private HashSet<string> ValidationMessages { get; set; } = new HashSet<string>();
    }

    public interface IChatContentDomain : ICoreDomain<ChatContent, ChatContent> { }
}
