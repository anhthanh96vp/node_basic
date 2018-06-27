// https://www.youtube.com/watch?v=bh3QVH1CnBE&index=4&list=PLWBrqglnjNl0VDneZTLLiOApeBIrk1-S6

const http = require("http");

const server = http
	.createServer((req, res) => {
		//đây là cách lấy url gửi lên server, và remoteAddress là địa chỉ ip chúng ta gửi lên
		const ipAddress = req.socket.remoteAddress;
		res.write(`Your ip address is: ${ipAddress} \r\n`);

		res.write(`Request url: ${req.url} \r\n`);

		//-----------------------------------
		const url = require("url");
		res.write(`Detail request's url:  ${url.parse(req.url, true)}\r\n`);

        //Các thông số phía client gửi lên
		res.write(`Detail full: ${JSON.stringify(url.parse(req.url, true))}`);
		res.end();
	})
	.listen(8000, () => {
		console.log(`server is running: ${server.address().port}`);
	});
