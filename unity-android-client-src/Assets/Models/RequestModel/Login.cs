using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.RequestModel.POST
{
    public class Data : ReqModel
    {
        public string id = "1aW6QcnlKC7JEjshJVCaFsHzYdlGZ2fvJbmFB2KeRgMU";

        public string email { get; set; }
        public string password { get; set; }


       
        public override string Resource => "api/auth/login"; 
    } 
}
