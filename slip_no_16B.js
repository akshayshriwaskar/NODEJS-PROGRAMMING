var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_data"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE Employee SET Sal = 50000 WHERE Eno = 1";
  con.query(sql, function (err, result,display) {
    if (err) throw err;
    console.log(result.affectedRows + " record updated");
  });

  con.query("SELECT * FROM employee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

