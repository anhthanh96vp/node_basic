// https://www.youtube.com/watch?v=66oGjuwXrbA&index=9&list=PLWBrqglnjNl0VDneZTLLiOApeBIrk1-S6

// Khởi tạo sẵn project bằng thư viện
//B1: npm install express-generator -g

//Xem trợ giúp
//B2: express -h

//Cài thêm module ejs vào project
//B3: express --view=ejs myApp
//Cài thêm module nodmon => npm install nodemon

//B4: npm install

//B5: npm start

// ----------------------------------------------------------

//Khởi tạo thư mục database
//rm -rf /Users/Administrator/Desktop/node_basic/youtube/express/myApp/database
//mkdir /Users/Administrator/Desktop/node_basic/youtube/express/myApp/database

//Khởi tạo cổng 27017 và đợi client connect vào cổng này
//mongod --port 27017 --dbpath /Users/Administrator/Desktop/node_basic/youtube/express/myApp/database

//Bật terminal khác lên và connect vào cổng
//mongo --port 27017

//Tạo mới và nhảy vào database tutorialMongoDB
//use tutorialMongoDB

// Khởi tạo 1 user
// db.createUser({
// user: "thanhna",
// pwd: "thanhna",
// roles: ["readWrite", "dbAdmin", "dbOwner"]
// })

// Sau đó tắt hết tiến trình đang chạy đi
//-------------------------------------

//Start lại cổng 27017 và thêm --auth để thêm phần bảo mật để login
//mongod --auth --port 27017 --dbpath /Users/Administrator/Desktop/node_basic/youtube/express/myApp/database

//Bật terminal khác và phải login bằng user và pass ở trên bằng lệnh
//mongo --port 27017 -u "thanhna" -p "thanhna" --authenticationDatabase "tutorialMongoDB"

//nhảy vào database tutorialMongoDB của mình
//use tutorialMongoDB

//có thể xem bảng bằng
//show collections

//xem chi tiết phần tử trong file
//db.foods.find().pretty()

