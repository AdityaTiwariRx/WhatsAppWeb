using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using WhatsApp.BoundedContext.SqlContext;
namespace WhatsApp.Models.Main
{
    [Table("vCountryLookups",Schema="dbo")]
    public partial class vCountryLookup
    {

        public string CountryName { get; set; }

     
        [System.ComponentModel.DataAnnotations.Key]
        public string CountryCode { get; set; }


        public vCountryLookup()
        {
        }
	}
}