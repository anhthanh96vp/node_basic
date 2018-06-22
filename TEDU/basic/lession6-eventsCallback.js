const emitter = require("events").EventEmitter;

function Loop(num) {
  const e = new emitter();

  setTimeout(function() {
    for (i = 1; i <= num; i++) {
      e.emit("Before", i);

      console.log(`Process: ${i}`);

      e.emit("After", i);
    }
  }, 0);
  return e;
}

const L = Loop(3);

L.on("Before", function(data) {
  console.log("Before-text", data);
});

L.on("After", function(data) {
  console.log("After-text", data);
});
