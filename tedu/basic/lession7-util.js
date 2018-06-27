//So sánh với lession6

const event = require("events").EventEmitter;
const util = require("util");

function Loop(num) {
  //Khai báo e = this. Tức là e đại diện cho function Loop
  const e = this;

  setTimeout(function() {
    for (i = 1; i <= num; i++) {
      e.emit("Before", i);

      console.log(`Process: ${i}`);

      e.emit("After", i);
    }
  }, 0);

  //Return ra bản thân function Loop
  return this;
}

//Hàm này sử dụng để kế thừa, tức là ở đây Loop đã kế thừa event
//Và sử dụng được như bình thường

util.inherits(Loop, event);

const L = new Loop(3);

L.on("Before", function(data) {
  console.log("Before-text", data);
});

L.on("After", function(data) {
  console.log("After-text", data);
});
