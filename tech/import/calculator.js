//Cách 1: export kiểu cũ, export kiểu lẻ tẻ

// exports.total = (x, y) =>  x + y
// exports.minus = (x, y) =>  x - y

//Cách 2: export kiểu cũ, export kiểu nhiều

// module.exports = {
// 	total :(x, y) =>  x + y,
// 	minus : (x, y) =>  x - y
// }

//Cách 3: export kiểu mới, export kiểu lẻ tẻ

// export const multiply = (x, y) => {
// 	return x * y;
// }

//Cách 4: export kiểu mới, export kiểu số nhiều

const multiply = (x, y) => {
	return x * y
}

const total = (x, y) => {
	return x + y
}

export { multiply, total }

//Cách 5: export kiểu defaul
const test1 = (x, y) => x + y
export default test1
