import express from "express"
import bodyParser from "body-parser"

export const app = express()
var i = 0
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get("/", (req, res) => {
	i += 1
	console.log(i)
	res.send("Hello World!")
})
app.listen(3333, () => {
	console.log(`Server is listening on port 3333`)
})
