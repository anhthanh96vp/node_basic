import express from "express"
const router = express.Router()

import { sequelize, Op } from "../databases/databases"

import { SUCCESS, FAILED } from "../config/default"

import { List } from "../models/List"

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.")
	})
	.catch(err => {
		console.error("Unable to connect to the database:", err)
	})

router.get("/", (req, res, next) => {
	res.render("lists", { test: "Test cai coi sao" })
})

router.post("/", (req, res) => {
	const { name, priority, description, duedate } = req.body
	List.create(
		{
			name,
			priority: parseInt(priority),
			description,
			duedate
		},
		{ fields: ["name", "priority", "description", "duedate"] }
	)
		.then(newList => {
			res.json({
				result: SUCCESS,
				data: newList,
				description: `Create new List successfully`
			})
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Create new List failed. Error = ${err}`
			})
		})
})

module.exports = router
