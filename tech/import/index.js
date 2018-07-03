//Cách require kiểu cũ
// const calcu = require('./calculator')
// const total = require('./calculator').total

//Import kiểu cả file
// import calcu from './calculator'

// console.log(`Tổng: ${calcu.total(2,3)}`)
// console.log(`Hiệu: ${calcu.minus(2,3)}`)

//Import kiểu mới, chỉ định những hàm muốn import
// import {total, minus} from './calculator'

// console.log(`Tổng: ${total(2,3)}`)
// console.log(`Hiệu: ${minus(2,3)}`)

// import { multiply, total } from './calculator'

// console.log(multiply(2,3))
// console.log(multiply(2,3))

//Kiểu này sử dụng cho import Defaul bên file calculator
// import test1 from "./calculator"
// console.log(test1(2, 3))

// Phần này đọc code bên test1
import { product } from "./test1";

import { product as product2 } from "./test1";

product2.name = "gdf";
console.log(product.name);
console.log(product2.name);
