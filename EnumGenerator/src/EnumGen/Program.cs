using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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
            System.IO.File.WriteAllText(language + ".json", generatedCode);
        }
        static void Main(string[] args)
        {
            Console.WriteLine("인자 개수 : " + args.Length);

            string path = @"..\Enum.json";
            string readedJson = System.IO.File.ReadAllText(path);
            if (args.Length == 0)
            {

            }

            SerializedEnum serializedEnum = Newtonsoft.Json.JsonConvert.DeserializeObject<SerializedEnum>(readedJson);
            serializedEnum.Datas = serializedEnum.Datas.OrderBy(x => x.Value).ToList();
            System.IO.File.WriteAllText(@"..\Enum_sorted.json", JValue.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(serializedEnum)).ToString(Formatting.Indented));
            KotlinEnumGen kotlin = new KotlinEnumGen();
            JSEnumGen js = new JSEnumGen();

            kotlin.Generate(serializedEnum, GeneratedCodeProccessor);
            js.Generate(serializedEnum, GeneratedCodeProccessor);

        }
    }
}
