const socket = io.connect("http://localhost:8000");

socket.on("connect", data => {
	socket.emit("join", "Hello server form client");
});

socket.on("thread", data => {
	$("#thread").append(`<li>${data}</li>`);
});

//Lúc submit không nên sử dụng arrow function
$("form").submit(function() {
	const message = $("#message").val();
	socket.emit("messages", message);
	this.reset();

	return false;
});
