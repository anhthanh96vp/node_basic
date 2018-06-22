var url = require("url");
var website = "http://toidicode.com?a=5";

//parse chuỗi sang url
var parse = url.parse(website, true);

//Hiển thị 1 obj url
console.log(parse);

//hiển thị host
console.log("auth: " + parse.auth);
console.log("hash: " + parse.hash);
console.log("host: " + parse.host);
console.log("hostname: " + parse.hostname);
console.log("href: " + parse.href);
console.log("path: " + parse.path);
console.log("pathname: " + parse.pathname);
console.log("port: " + parse.port);
console.log("protocol: " + parse.protocol);
console.log("query: " + parse.query.a);
console.log("search: " + parse.search);
console.log("slashes: " + parse.slashes);

// auth: null
// hash: null
// host: toidicode.com
// hostname: toidicode.com
// href: http://toidicode.com/?a=5
// path: /?a=5
// pathname: /
// port: null
// protocol: http:
// query: 5
// search: ? a = 5
// slashes: true
