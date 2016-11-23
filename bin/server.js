'use strict';

require("babel-register")({
  "presets": ["es2015-node5"],
  "plugins": [
    "transform-async-to-generator",
    "syntax-async-functions"
  ]
});

const app = require('../src/app');

console.log('listen 3001')
app.listen(3001)


// const http = require('http');
// const net = require('net');
// const url = require('url');

// // Create an HTTP tunneling proxy
// var proxy = http.createServer( (req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('okay');
// });
// proxy.on('connect', (req, cltSocket, head) => {
//   // connect to an origin server
//   var srvUrl = url.parse(`http://${req.url}`);
//   var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
//     cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
//                     'Proxy-agent: Node.js-Proxy\r\n' +
//                     '\r\n');
//     srvSocket.write(head);
//     srvSocket.pipe(cltSocket);
//     cltSocket.pipe(srvSocket);
//   });
// });

// // now that proxy is running
// proxy.listen(1337, '127.0.0.1', () => {

//   // make a request to a tunneling proxy
//   var options = {
//     port: 1337,
//     hostname: '127.0.0.1',
//     method: 'CONNECT',
//     path: 'www.163.com:80'
//   };

//   var req = http.request(options);
//   req.end();

//   req.on('connect', (res, socket, head) => {
//     console.log('got connected!');

//     // make a request over an HTTP tunnel
//     socket.write('GET / HTTP/1.1\r\n' +
//                  'Host: www.163.com:80\r\n' +
//                  'Connection: close\r\n' +
//                  '\r\n');
//     socket.on('data', (chunk) => {
//       console.log(chunk.toString()+'你好你好你好你好你好');
//     });
//     socket.on('end', () => {
//       proxy.close();
//     });
//   });
// });


// var http = require('http');

// http.createServer(function (request, response){
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   response.write('hello');
//   response.write(' world ');
//   response.write('~ ');
//   response.end();
// }).listen(3000, "127.0.0.1");