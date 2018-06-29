import express from "express"
const app = express()

app.listen(8888)

app.get("/tintuc/:id", (req, res) => {
	let i = req.params.id
	res.send(`Server nhận được id là  ${i}`)
})
