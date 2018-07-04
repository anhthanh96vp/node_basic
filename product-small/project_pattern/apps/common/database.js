import config from "config"
import mysql from "mysql"

//Lấy dữ liệu từ file config
let options = {
	host: config.get("mysql.host"),
	user: config.get("mysql.user"),
	password: config.get("mysql.password"),
	database: config.get("mysql.database"),
	port: config.get("mysql.port")
}
console.log(`options ${JSON.stringify(options)}`)
let connection = mysql.createConnection(options)

connection.connect()

const getConnection = () => {
	if (!connection) {
		connection.connect()
	}
	return connection
}
module.exports = getConnection

