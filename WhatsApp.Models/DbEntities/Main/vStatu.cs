using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using WhatsApp.BoundedContext.SqlContext;
namespace WhatsApp.Models.Main
{
    [Table("vStatus",Schema="dbo")]
    public partial class vStatu
    {
		#region UserId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion UserId Annotations

        public int UserId { get; set; }


        public int StatusId { get; set; }


        public int StatusUserId { get; set; }


        public string StatusType { get; set; }


        public string StatusContent { get; set; }


        public string StatusCaption { get; set; }


        public System.DateTime CreatedTime { get; set; }


        public int MyContactId { get; set; }


        public string UserName { get; set; }


        public string MyContactName { get; set; }


        public int UsercontactId { get; set; }


        public vStatu()
        {
        }
	}
}