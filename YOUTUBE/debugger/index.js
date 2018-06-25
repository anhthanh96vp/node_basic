// www.youtube.com/watch?v=LmYM5BCQKMA&list=PLWBrqglnjNl0VDneZTLLiOApeBIrk1-S6&index=3

debugger;

const average = number => {
	let total = 0;
	for (let num of number) {
		debugger;
		total += parseFloat(num);
		console.log(`num is ${num} - total is ${total}`);
	}
	console.log(`tbc is ${total / number.length}`);
};

average([1, 2, 3, 4, 5]);

//Chạy debugger  -->  nodemon inspect index.js

//sử dụng c + n để debug

//Sử dụng lệnh: repl để xem giá trị biến cần debug

//Sử dụng lệnh: list(5) để xem số dòng đang debug

//Sử dụng lệnh : sb(12) khi muốn nhảy đến dòng 12 và bỏ qua vòng for, sau đó ấn c;
