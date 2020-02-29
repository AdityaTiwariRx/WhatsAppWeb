using RxWeb.Core.Data;
using WhatsApp.BoundedContext.Main;

namespace WhatsApp.UnitOfWork.Main
{
    public class ChatUow : BaseUow, IChatUow
    {
        public ChatUow(IChatContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface IChatUow : ICoreUnitOfWork { }
}


