var mysql = require("mysql");

var connection;
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }
  else {
    connection = mysql.createConnection({
      host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "uy1rxzmwk1ypy32a",
      password: "aa8ywt0j5o2ln8xo",
      database: "vit9huq1dtat1qd2"
    });

    // Make connection.
    connection.connect(function (err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + connection.threadId);
    });

    // Export connection for our ORM to use.
    module.exports = connection;
  }
