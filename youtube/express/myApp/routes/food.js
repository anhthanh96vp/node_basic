var express = require("express")
var router = express.Router()
var Food = require("../models/foodmodel")

/* GET home page. */
router.get("/list_all_foods", (req, res, next) => {
	res.render("index", { title: "Test thử phát coi sao" })
})
router.post("/insert_new_food", (request, response, next) => {
	const newFood = new Food({
		name: request.body.name,
		foodDescription: request.body.foodDescription
	})
	newFood.save(err => {
		if (err) {
			response.json({
				result: "failed",
				data: {},
				messege: `Error is : ${err}`
			})
		} else {
			response.json({
				result: "ok",
				data: {
					name: request.body.name,
					foodDescription: request.body.foodDescription,
					messege: "Insert new food successfully"
				}
			})
		}
	})
})

router.put("/update_a_food", (request, response, next) => {
	res.render("index", { title: "PUST XEM NÀO" })
})

router.delete("/delete_a_food", (request, response, next) => {
	res.render("index", { title: "delete" })
})
module.exports = router
