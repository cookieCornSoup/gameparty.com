using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 
namespace Models.RequestModel.POST
{
    public class SignUp : ReqModel
    {
        public string email { get; set;}
        public string password { get; set; } 
        public override string Resource => "api/users/";  
    }
}
