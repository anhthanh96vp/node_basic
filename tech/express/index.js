import express from "express"
import bodyParser from "body-parser"

export const app = express()
var i = 0

app.get("/", (req, res) => {
	//mỗi lần gửi request lên i sẽ + thêm 1
	i += 1
	console.log(i)
	res.send("Hello World!")
})
app.listen(3333, () => {
	console.log(`Server is listening on port 3333`)
})
