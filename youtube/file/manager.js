//import modules fs
const fs = require("fs");

//exports các hàm bên dưới để có thể import trong file index
module.exports = {
	//Phương thức với tham số 'w' để khởi tạo file
	createFile: fileName => {
		const fd = fs.openSync(fileName, "w");
	},
	//Phương thức ghi file, tham số truyền vào là object dữ liệu và đường dẫn file
	saveFile: (obj, fileName) => {
		//Khi gửi dữ liệu đến một máy chủ web, dữ liệu phải là một chuỗi.
		// Sử dụng hàm JavaScript JSON.stringify() để chuyển đổi obj thành một chuỗi.
		const jsonString = JSON.stringify(obj);

		//Sau đó sử dụng hàm writeFile() in giá trị vào file text2
		fs.writeFile(fileName, jsonString, "utf-8", (err, data) => {
			if (err) throw err;
		});
	},
	readFile: fileName => {
		//Phương thức readFile với chức năng đọc file
		fs.readFile(fileName, (err, data) => {
			if (err) throw err;
			// chuyên chuỗi JSON lấy về thành 1 object
			let jsonObject = JSON.parse(data);

			//xong lại chuyển object đó thành chuỗi :))
			console.log(`jsonObject:  ${JSON.stringify(jsonObject.foods)}`);
            console.log(`jsonObject-resultCode:  ${JSON.stringify(jsonObject.resultCode)}`);
            console.log(`jsonObject-address:  ${JSON.stringify(jsonObject.address)}`);
		});
	}
};
