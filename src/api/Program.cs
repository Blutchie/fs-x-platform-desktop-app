using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace dotnet
{
    public class Program
    {
      // required for published build: dotnet add package SQLitePCLRaw.bundle_e_sqlite3

      //publish for electron: (should be in npm build scripts)
      // dotnet publish -r win-x64 --output ../../api/win
      // dotnet publish -r linux-x64 --output ../../api/linux
      // dotnet publish -r osx-x64 --output ../../api/mac
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseUrls("http://localhost:34543")
                .Build();
    }
}
