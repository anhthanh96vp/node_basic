// process - Lấy được tất cả các thông số môi trường, tham số, tất cả mọi thứ của hệ thống (đéo biết là đến đâu)
// Nếu trên server cũng có thể lấy được trên server
// console.log(process);

// __filename - Lấy được đường dẫn của file hiện tại
console.log(__filename);

//__dirname - Lấy được đường dẫn thư mục hiện tại chứa file
console.log(__dirname);

//Ngoài ra còn 3 hàm setTimeout, setInterval và clearInterval
setTimeout(function() {
  console.log("Load sau 1 giây");
}, 1000);

let i = 0;
setInterval(function() {
  console.log("Cứ 1 giây tao load 1 lần");
  i++;
  if (i == 5) clearTimeout(this);
}, 1000);
