var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ocs"
});

con.connect(function (error) {
    if (error) throw error;
    console.log("connected");
    con.query("SELECT * FROM yukti", function (err, result) {
        if (err) throw err;
        // console.warn("data: ",result);
        console.warn("data", result[0].heading);
        console.warn("data", result[1].heading);
        console.warn("data", result[2].heading);
    })
})