const fileManager = require("./manager");

let fileTest = __dirname + "/data/test2.txt";

fileManager.createFile(fileTest);

let jsonObject = {
	foods: [
		{
			fooname: "Bánh Bao",
			foodetail: "Chi tiết Bánh Bao"
		},
		{
			fooname: "Ngô cay",
			foodetail: "Chi tiết Ngô cay"
		},
		{
			fooname: "Bỏng ngô",
			foodetail: "Chi tiết Bỏng ngô"
		},
		{
			fooname: "Mứt dừa",
			foodetail: "Chi tiết Mứt dừa"
		},
		{
			fooname: "Bún chả",
			foodetail: "Chi tiết Bún chả"
		},
		{
			fooname: "Tào Phớ",
			foodetail: "Chi tiết Tào Phớ"
		},
		{
			fooname: "Cơm Rang",
			foodetail: "Chi tiết Cơm Rang"
		}
	],
	resultCode: 200,
	address: "Hà Nội"
};

fileManager.saveFile(jsonObject, fileTest);

fileManager.readFile(fileTest);
