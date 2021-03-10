using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class APIProtocol
    {
        public string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this); 
        } 
        public static T ToObject<T>(string json) where T : ReqModel
        { 
            return Newtonsoft.Json.JsonConvert.DeserializeObject<T>(json);
        }
    }
    public abstract class ResModel<T> : APIProtocol
    {   
        public string status;
        public string message;
        public T data;
    }
    public abstract class ReqModel : APIProtocol
    {
        [JsonIgnore]
        public abstract string Resource { get; } 
    }
}
