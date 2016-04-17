using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace LinksManager.Models
{
    public class SqlLinRepository : ILinkRepository
    {
        private string _connectionString;

        private const string GetAllQuery = "SELECT Id, Name, Url FROM tblLinks;";
        private const string InsertLinkQuery = "INSERT INTO tblLinks (Name, Url) VALUES (@name, @url);";

        public SqlLinRepository(string connectionString)
        {
            this._connectionString = connectionString;
        }

        public List<LinkEntity> GetAll()
        {
            using (SqlConnection connection = new SqlConnection(this._connectionString))
            {
                connection.Open();
                
                using (SqlCommand command = new SqlCommand(GetAllQuery, connection))
                {
                    List<LinkEntity> result = new List<LinkEntity>();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            result.Add(new LinkEntity
                            {
                                Id = int.Parse(reader["Id"].ToString()),
                                Name = reader["Name"].ToString(),
                                Url = reader["URL"].ToString()
                            });
                        }
                        return result;
                    }
                }
            }
        }

        public int InsertLink(LinkEntity link)
        {
            using(SqlConnection connection = new SqlConnection(this._connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(InsertLinkQuery, connection))
                {
                    command.Parameters.AddWithValue("@name", link.Name);
                    command.Parameters.AddWithValue("@url", link.Url);

                    return command.ExecuteNonQuery();
                }
            }
        }
    }
}