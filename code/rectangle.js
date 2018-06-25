//Từ khóa exports giúp cho hàm area được public và có thể được gọi ở file khác

// exports.area = (width, height) => width * height;
// exports.circumference = (width, height) => (width + height) * 2;

//--------------------------------------------------------------------------

// module.exports = {
// 	area: (width, height) => width * height,
// 	circumference: (width, height) => (width + height) * 2
// };

//-------------------------------------------------------------------------
//Nếu nhiều dòng phải sử dụng return
const { PI } = Math;

module.exports = {
	area: (width, height) => {
		return width * height;
	},
	circumference: (width, height) => {
		return (width + height) * 2;
	},
	// vongtron: radius => {
	// 	Math.PI * radius * radius;
	// },
	date: Date(),
	dirname: __dirname
};

// module.exports = {
// 	vongtron: radius => {
// 		Math.PI * radius * radius;
// 	}
// };
