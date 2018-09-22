using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;

namespace dotnet.Repositories
{
    public class DemoRepo
    {
        public DemoRepo()
        {
            using (var connection = new SqliteConnection("" +
                new SqliteConnectionStringBuilder
                {
                    DataSource = "demo.db",
                }))
            {
                connection.Open();

                var insertCommand = connection.CreateCommand();
                insertCommand.CommandText = "CREATE TABLE IF NOT EXISTS DemoValues (id INTEGER PRIMARY KEY AUTOINCREMENT, value VARCHAR(255));";
                insertCommand.ExecuteNonQuery();
            }
        }

        public void AddValue(string value)
        {
            using (var connection = new SqliteConnection("" +
              new SqliteConnectionStringBuilder
              {
                  DataSource = "demo.db"
              }))
            {
                connection.Open();

                var insertCommand = connection.CreateCommand();
                insertCommand.CommandText = "INSERT INTO DemoValues ( value ) VALUES ( $value )";
                insertCommand.Parameters.AddWithValue("$value", value);
                insertCommand.ExecuteNonQuery();

            }
        }
        public List<string> GetValues()
        {
            List<string> values = new List<string>();
            using (var connection = new SqliteConnection("" +
              new SqliteConnectionStringBuilder
              {
                  DataSource = "demo.db"
              }))
            {
                connection.Open();
                var selectCommand = connection.CreateCommand();
                selectCommand.CommandText = "SELECT value FROM DemoValues";
                using (var reader = selectCommand.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        values.Add(reader.GetString(0));
                    }
                }

            }
            return values;
        }
    }

}
