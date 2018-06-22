// Sử dụng để nén file

const zlib = require("zlib");
const fs = require("fs");

//Cú pháp sử dụng để nén file
const gzip = zlib.createGzip();

//Cú pháp sử dụng để giải nén
const gunzip = zlib.createGunzip();

//Đọc file
const inp = fs.createReadStream("net.js");
//Ghi file
const out = fs.createWriteStream("net.gz");

//Đọc file rồi sử dụng gzip để nén sau đó ghi file bằng out
inp.pipe(gzip).pipe(out);
console.log("File được nén thành công.");

//Đọc file rồi sử dụng gunzip để giải nén sau đó ghi file bằng out
inp.pipe(gunzip).pipe(out);
console.log("Giải nén File thành công.");
