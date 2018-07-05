// Sử dụng thư viện mongoose để tạo bảng
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Tạo các trường trong bảng FoodSchema
var FoodSchema = new Schema({
	name: {
		type: String,
		required: true // yêu cầu trường này phải có giá trị
	},
	foodDescription: {
		type: String, 
		default: "" // mặc định là rỗng
	},
	created_date: {
		type: Date, 
		default: Date.now // mặc định lấy luôn giờ hiện tại
	},
	status: {
		type: [
			{
				type: String,
				enum: ["available", "unavailable"]  // kiểu chọn 1 trong nhiều trạng thái
			}
		],
		default: ["available"] // mặc định là available
	}
});
// a setter
//Hàm này có ý nghĩa, khi trường name được gán giá trị thì chúng ta sẽ làm gì đó trong này
//rồi mới insert vào database
FoodSchema.path("name").set(inputString => {
	//ở đây là đổi chữ cái đầu thành viết hoa
	return inputString[0].toUpperCase() + inputString.slice(1);
});
module.exports = mongoose.model("Food", FoodSchema);
