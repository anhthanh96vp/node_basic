var express = require("express")
var router = express.Router()

// IMPORT FOODMODEL
let Food = require("../models/foodmodel")

// GET RA LIST DANH SÁCH DỮ LIỆU TRONG KHOẢNG 100 BẢN GHI
router.get("/list_all_foods", (req, res, next) => {
	//Food.find({}) có tham số là ngoặc trống để list hết ra
	Food.find({})
		.limit(100) // limit(100) để load 100 bản ghi đầu
		.sort({ name: 1 })
		.select({
			//danh sách các trường muốn hiển thị
			name: 1,
			foodDescription: 1,
			created_date: 1,
			status: 1
		})
		.exec((err, foods) => {
			if (err) {
				//Trường hợp lỗi
				res.json({
					result: "failed",
					data: [],
					messege: `Error is ${err}`
				})
			} else {
				//Trường hợp thành công
				res.json({
					result: "ok",
					data: foods,
					count: foods.length,
					messege: "Query list of foods successfully"
				})
			}
		})
})

//LẤY CHI TIẾT BẢN GHI DỰA VÀO ID
//localhost:3005/list_id_foods?food_id=5b3f198dd4b580032152b73f

router.get("/list_id_foods", (req, res, next) => {
	//Phương thức findById của thư viện Food lấy từ trong model mongoose
	Food.findById(
		//Vì req.query.food_id là 1 string nên phải sử dụng phương thức
		//Types.ObjectId để chuyển nó sang dạng object mới dùng được
		require("mongoose").Types.ObjectId(req.query.food_id),
		(err, food) => {
			if (err) {
				res.json({
					result: "failed",
					data: {},
					messege: `Error is ${err}`
				})
			} else {
				res.json({
					result: "ok",
					data: food,
					messege: "Query food by Id successfully"
				})
			}
		}
	)
})

//Tương tự như hàm get list all bên trên, nhưng hàm này xét điều kiện tìm name nào, load ra bao nhiêu bản ghi
router.get("/list_dk_foods", (req, res, next) => {
	//Trong đó req.query.name lấy trên url với cú pháp query
	//Kiểm tra nếu chưa nhập name sẽ lỗi
	if (!req.query.name) {
		res.json({
			result: "failed",
			data: [],
			messege: "Input parameters wrong! name must be not NULL"
		})
	}
	//với RegExp tham số là "i" tức là không phân biệt hoa thường
	// "^" là bắt đầu, "$" là kết thúc
	let criteria = { name: new RegExp(req.query.name, "i") } //chỉ cần chứa kí tự nhập vào là chạy
	// let criteria = { name: new RegExp("^" + req.query.name + "$", "i") }; //Phải nhập đúng chữ cái đầu và cuối

	//limit là tham số để load ra bao nhiêu bản ghi
	//Nếu req.query.litmit > 0 thì limit bằng chính nó, còn nếu sai thì là 100
	//Trong đó req.query.litmit lấy trên url với cú pháp query
	const limit =
		parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 100

	Food.find(criteria)
		.limit(limit)
		.sort({
			name: 1
		})
		.select({
			name: 1,
			foodDescription: 1,
			created_date: 1,
			status: 1
		})
		.exec((err, foods) => {
			if (err) {
				//Trường hợp lỗi
				res.json({
					result: "failed",
					data: [],
					messege: `Error is ${err}`
				})
			} else {
				//Trường hợp thành công
				res.json({
					result: "ok",
					data: foods,
					count: foods.length,
					messege: "Query list of foods successfully"
				})
			}
		})
})

// TẠO MỚI 1 BẢN GHI
router.post("/insert_new_food", (req, res, next) => {
	// GỬI REQUEST 2 TRƯỜNG LÀ name VÀ foodDescription
	const newFood = new Food({
		name: req.body.name,
		foodDescription: req.body.foodDescription
	})

	//Phương thức save check xem đã insert thành công hay chưa
	newFood.save(err => {
		if (err) {
			res.json({
				result: "failed",
				data: {},
				messege: `Error is : ${err}`
			})
		} else {
			console.log("alo")

			res.json({
				result: "ok",
				data: {
					name: req.body.name,
					foodDescription: req.body.foodDescription,
					messege: "Insert new food successfully"
				}
			})
		}
	})
})

router.put("/update_a_food", (req, res, next) => {
	res.render("index", { title: "PUST XEM NÀO" })
})

router.delete("/delete_a_food", (req, res, next) => {
	res.render("index", { title: "delete" })
})
module.exports = router
