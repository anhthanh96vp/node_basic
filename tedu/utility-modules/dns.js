// dns Module trong Node.js được sử dụng để thực hiện DNS Lookup.Module cung cấp một Network Wrapper không đồng bộ và có thể được import với cú pháp.

//Tìm hiểu thêm tại
//http://vietjack.com/nodejs/dns_module_trong_nodejs.jsp
var dns = require("dns");

dns.lookup("www.google.com", function onLookup(err, address, family) {
  console.log("Địa chi:", address);
  dns.reverse(address, function(err, hostnames) {
    if (err) {
      console.log(err.stack);
    }

    console.log(
      "Phuong thuc REVERSE cho dia chi: " +
        address +
        " thanh mang cac hostname: " +
        JSON.stringify(hostnames)
    );
  });
});
