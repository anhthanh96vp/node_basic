import express from "express"
import bodyParser from "body-parser"

export const app = express()

//2 dòng này của bodyParser sử dụng để phân tích cú pháp
// cần thiết khi post lên bằng
//  test: JSON.stringify(req.body)
// đọc thêm bên thư mục khoapham/body-parser-POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
