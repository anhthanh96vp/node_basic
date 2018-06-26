var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" })
})

router.get("/get_express", (req, res, next) => {
	res.end("get express runnings")
})

router.post("/post_express", (req, res, next) => {
	res.end("post express runnings")
})

router.put("/put_express", (req, res, next) => {
	res.end("put express runnings")
})

router.delete("/delete_express", (req, res, next) => {
	console.log(__dirname)
	res.end("delete express runnings")
})
module.exports = router
