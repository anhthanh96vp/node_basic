import { app } from "./app"
export const taskRouter = app.route("/tasks")

taskRouter.get((req, res) => {
	res.send("Get taskRouter")
})
taskRouter.put((req, res) => {
	res.send("PUT taskRouter")
})
taskRouter.post((req, res) => {
	res.send("POST taskRouter")
})
taskRouter.delete((req, res) => {
	res.send("DELETE taskRouter")
})
