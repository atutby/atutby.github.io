const mysql = require("mysql2")

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "usersdb2",
	password: "oo4Ax4YX3AVa"
})

const users = [
	["Bob", 22],
	["Alice", 25],
	["Kate", 28]
]
const sql2 = `INSERT INTO users(name, age) VALUES ?`;
const sql3 = `SELECT * FROM users`;
const sql4 = `SELECT * FROM users WHERE name=? AND age=?`
const filter = ["Sam", 31];

const sql5 = `UPDATE users SET age=? WHERE name=?`;
const data = [34, "Sam"]

const sql6 = `DELETE FROM users WHERE name=?`
const data2 = ["Sam"]

connection.query(sql6, data2, function(err, results) {
	if(err) console.log(err);
	console.log(results);
})
connection.end()