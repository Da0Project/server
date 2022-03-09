/** @format */

const router = require("express").Router();
const mysql = require("mysql");

var con = mysql.createConnection({
	host: "memem",
	user: "root",
	password: "tt",
	database: "test",
});
con.connect();

router.get("/test", function (req, res) {
	var sql = `SELECT * FROM table`;
	con.query(sql, function (err, rows, fields) {
		if (err) {
			console.log(err);
		} else {
			console.log(rows);
			res.json(rows);
		}
	});
});

module.exports = router;
