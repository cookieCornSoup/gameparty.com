using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 
namespace EnumGenerator
{
    class Program
    {
        static void GeneratedCodeProccessor(string language, string generatedCode)
        {
            System.IO.File.WriteAllText(language+".json", generatedCode);
        }
        static void Main(string[] args)
        { 
            string path = "Enum.json";
            string readedJson = System.IO.File.ReadAllText(path);
           
            SerializedEnum serializedEnum = Newtonsoft.Json.JsonConvert.DeserializeObject<SerializedEnum>(readedJson);
           
            KotlinEnumGen kotlin = new KotlinEnumGen();
            JSEnumGen js = new JSEnumGen();

            kotlin.Generate(serializedEnum, GeneratedCodeProccessor); 
            js.Generate(serializedEnum, GeneratedCodeProccessor); 
        }
    }
}
