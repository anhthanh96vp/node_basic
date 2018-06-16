const net = require('net');

const client = net.connect({port: 52985}, () => {
    console.log('Đã ket noi voi Server!'); 
    client.write('word!')
 });
 client.on('data', (data) =>{
    console.log(data.toString());
    client.end();
 });
 client.on('end', () => { 
    console.log('Mat ket noi voi Server');
 });