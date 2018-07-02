import express from "express"
const router = express.Router()

// Vì đã được Include bên file index.js nên đường dẫn ở đây sẽ là /admin
router.get("/", (req, res) => {
	res.json({
		message: "This is Admin Page"
	})
})
router.get("/", (req, res) => {
	res.render("signup")
})
module.exports = router
