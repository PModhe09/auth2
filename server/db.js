const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database',
});

connection.connect((err) => {
  if (err) {
    console.error(
      'some eror' + 'Error connecting to MySQL database: ' + err.stack
    );
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

module.exports = connection;
