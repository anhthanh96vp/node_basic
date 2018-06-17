const net = require("net");

const client = net.connect(
  { port: 8080 },
  () => {
    console.log("Đã ket noi voi Server!");
  }
);
client.on("data", data => {
  console.log(data.toString());
  client.end();
});
client.on("end", () => {
  console.log("Mất kết nối với Server");
});
