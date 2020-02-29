using RxWeb.Core.Data;
using WhatsApp.BoundedContext.Main;

namespace WhatsApp.UnitOfWork.Main
{
    public class CountryLookupUow : BaseUow, ICountryLookupUow
    {
        public CountryLookupUow(ICountryLookupContext context, IRepositoryProvider repositoryProvider) : base(context, repositoryProvider) { }
    }

    public interface ICountryLookupUow : ICoreUnitOfWork { }
}


