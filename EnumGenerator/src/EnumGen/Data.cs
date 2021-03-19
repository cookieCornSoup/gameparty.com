using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnumGenerator
{
    public class SerializedEnum
    {
        public string EnumClassName { get; set; }
        public List<EnumData> Datas { get; set; }
    }
    public class EnumData
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Value { get; set; }
    }
}
