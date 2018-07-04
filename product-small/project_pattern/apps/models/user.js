import {getConnection} from "../common/database"
import q from "q"
//const conn = db.getConnection()

const addUser = user => {
	if (user) {
		let defer = q.defer()

		let query = getConnection.query(
			"INSERT INTO users SET ?",
			user,
			(error, results) => {
				if (error) {
					defer.reject(error)
				} else {
					defer.resolve(result)
				}
			}
		)

		return defer.promise
	}
	return false
}

module.exports = { addUser: addUser }
