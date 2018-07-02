import config from "config"
import mysql from "mysql"


//Lấy dữ liệu từ file config
var connection = mysql.createConnection({
	host: config.get("mysql.host"),
	user: config.get("mysql.user"),
	password: config.get("mysql.password"),
	database: config.get("mysql.database"),
	port: config.get("mysql.port")
})

connection.connect()

getConnection = () => {
	if (!connection) connection.connect()
	return connection
}
module.exports = { getConnection: getConnection }
