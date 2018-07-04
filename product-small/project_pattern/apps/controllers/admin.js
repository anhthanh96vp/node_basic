import express from "express"
const router = express.Router()

// import users để kết nối đến database
import userMd from "../models/user"

// Vì đã được Include bên file index.js nên đường dẫn ở đây sẽ là /admin
router.get("/", (req, res) => {
	res.json({
		message: "This is Admin Page"
	})
})

router.get("/signup", (req, res) => {
	res.render("signup", { data: {} })
})

//post dữ liệu từ form đăng ký lên và xử lý
router.post("/signup", (req, res) => {
	let user = req.body

	if (user.email.trim().length == 0) {
		res.render("signup", {
			data: {
				error: "Email is required"
			}
		})
	}

	if (user.password != user.repassword && user.email.trim().length != 0) {
		res.render("signup", {
			data: {
				error: "Email is not Match"
			}
		})
	}

	//Insert to DB

	user = {
		email: user.email,
		password: user.password,
		first_name: user.firstname,
		last_name: user.lastname
	}
	let result = userMd.addUser(user)
	if (!result) {
		res.render("signup", {
			data: { error: "Could not insert user data to DB" }
		})
	} else {
		res.json({ message: "Insert success" })
	}
})
module.exports = router

