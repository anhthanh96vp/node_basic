import { taskRouter } from "./taskRouter"
import { listRouter } from "./listRouter"
import { app } from "./app"

const server = app.listen(8000, () => {
	console.log(`server running ${server.address().port}`)
})

