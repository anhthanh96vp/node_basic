import q from "q"

const show = (err, data) => {
	let defer = q.defer()
	// * `reject` là một hàm callback xử lý cho hành động thất bại.
	if (err) defer.reject("Có lỗi")
	// `resolve` là một hàm callback xử lý cho hành động thành công.
	else defer.resolve(data)
	return defer.promise
}
// * `Thenable` là một phương thức ghi nhận kết quả của trạng thái(thành công hoặc thất bại)
// mà ta khai báo ở`Reject` và`Resolve`. Nó có hai tham số truyền vào là 2 callback function.
// Tham số thứ nhất xử lý cho`Resolve` và tham số thứ 2 xử lý cho`Reject`.

show(true, "data 1")
	.then(data => {
		console.log(data)
		let data2 = "data 2"
		return data2
	})
	.then(data2 => {	
		console.log(data2)
	})
	.catch(err => {
		console.log(err)
	})
