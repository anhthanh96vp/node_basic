// Lấy ra các thông tin hệ điều hành

const os = require("os");

console.log("freemem ", os.freemem());
console.log("arch ", os.arch());
console.log("cpus ", os.cpus());
console.log("EOL ", os.EOL);
console.log("endianness ", os.endianness());
console.log("homedir ", os.homedir());
console.log("hostname ", os.hostname());
console.log("loadavg ", os.loadavg());
console.log("networkInterfaces ", os.networkInterfaces());
console.log("platform ", os.platform());
console.log("release ", os.release());
console.log("tmpdir ", os.tmpdir());
console.log("totalmem ", os.totalmem());
console.log("type ", os.type());
console.log("userInfo ", os.userInfo());
console.log("uptime ", os.uptime());
console.log("getNetworkInterfaces ", os.getNetworkInterfaces());
console.log("tmpDir ", os.tmpDir());
