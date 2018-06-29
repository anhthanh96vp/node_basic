import { app } from "./app"
export const listRouter = app.route("/lists")

listRouter.get((req, res) => {
	// Chỉ được trả về 1 trong 2- json hoặc send
	res.json({
		name: "Hoang11",
		age: 30,
		//get dữ liệu về qua link url
		test: JSON.stringify(req.query)
	})
})
listRouter.post((req, res) => {
	// Chỉ được trả về 1 trong 2- json hoặc send
	res.json({
		name: "Hoang11",
		age: 30,
		//post dữ liệu lên kiểu ngầm
		test: JSON.stringify(req.body)
	})
})
listRouter.put((req, res) => {
	res.send("is Put listRouter")
})

listRouter.delete((req, res) => {
	res.send("is Delete listRouter")
})
