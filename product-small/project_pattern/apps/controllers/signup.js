import express from "express"
const router = express.Router()

// Vì đã được Include bên file index.js nên đường dẫn ở đây sẽ là /admin

router.get("/", (req, res) => {
	res.render("signup", { data: {} })
})

router.post("/", (req, res) => {
	let user = req.body

    if (!user.email.trim())
		res.render("signup", { data: { error: "Email is required" } })

	if (user.password != user.repassword)
		res.render("signup", { data: { error: "Email is not Match" } })

	//Insert to DB
})
module.exports = router
