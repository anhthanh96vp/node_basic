const EventEmitter = require("events")

// class Customer kế thức từ EventEmitter
class Customer extends EventEmitter {
	// hàm constructor là hàm có sẵn sử dụng để khởi tạo
	constructor(name, gender) {
		super()
		this.name = name
		this.gender = gender
	}
}

const mrJack = new Customer("Jack", "male")
// Ý nghĩa của hàm .on là để đăng ký sự kiện, và khi sự kiện được xảy ra thì chạy function bên trong
mrJack.on("eventCallFoods", foods => {
	for (let index in foods) {
		console.log(`${mrJack.name} call ${foods[index]}`)
	}
})

//Tổ chức sự kiện bằng emit và truyền dữ liệu vào
mrJack.emit("eventCallFoods", ["Pizza", "Salad"])
