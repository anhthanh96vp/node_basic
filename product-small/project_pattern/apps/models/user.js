//import sử dụng hàm connect bên file database

import db from "../common/database";
const conn = db.getConnection();

//import module promise
import q from "q";

//Hàm insert user lên database
const addUser = user => {
	if (user) {
		let defer = q.defer();

		// hàm xử lý khí connect server sau đó insert user lên database
		let query = conn.query(
			"INSERT INTO users SET ?",
			user,
			(error, result) => {
				if (error) {
					defer.reject(error);
				} else {
					defer.resolve(result);
				}
			}
		);
		return defer.promise;
	}
	return false;
};
module.exports = { addUser };
