using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace EnumGenerator
{
    class Program
    {
        static KotlinEnumGen kotlin = new KotlinEnumGen();
        static JSEnumGen     js     = new JSEnumGen();
        static string outputDirectoryName    = @"output\";

        static void GeneratedCodeProccessor(string language, string generatedCode)
        { 
            var targetPath = Path.Combine(outputDirectoryName,language + ".json" );
            if (outputDirectoryName != null) 
                Directory.CreateDirectory(outputDirectoryName); 
            System.IO.File.WriteAllText(targetPath, generatedCode); 
        }

        static void LoadAndGenerate(string readedJson, string outputPath = null)
        { 
            SerializedEnum serializedEnum = Newtonsoft.Json.JsonConvert.DeserializeObject<SerializedEnum>(readedJson);
            serializedEnum.Datas = serializedEnum.Datas.OrderBy(x => x.Value).ToList(); 
            System.IO.File.WriteAllText(@"..\Enum_sorted.json", JValue.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(serializedEnum)).ToString(Formatting.Indented)); 
            kotlin.Generate(serializedEnum, GeneratedCodeProccessor);
            js.Generate(serializedEnum,     GeneratedCodeProccessor);
        }
        static void Main(string[] args)
        {
            Console.WriteLine("인자 개수 : " + args.Length);

            string path = @"..\Enum.json"; 
            if (args.Length != 0)
            { 
                for (int i = 0; i < args.Length; i++)
                {
                    string arg = args[i];
                    if (arg == "--filepath")
                    {
                        i++;
                        path = args[i];  
                        Console.WriteLine("target enum filepath 경로 :" + args[i]);
                    } 
                    if (arg == "--outdir")
                    {
                        i++;
                        outputDirectoryName = args[i];
                        Console.WriteLine("output dir 경로 :" + args[i]);
                    }
                }


                string readedJson = System.IO.File.ReadAllText(path);
                LoadAndGenerate(readedJson);
            }
            else
            { 
                string readedJson = System.IO.File.ReadAllText(path);
                LoadAndGenerate(readedJson);
            }

    
            System.Threading.Thread.Sleep(4000);

          
        }
    }
}
