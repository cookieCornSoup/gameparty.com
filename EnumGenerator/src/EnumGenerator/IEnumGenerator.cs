using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnumGenerator
{
    public interface IEnumGenerator
    {
        void Generate(SerializedEnum enums, System.Action<string, string> generatedCodeCallback);
        string Def { get; }
    }
}
