const http = require('http');
const data = require('./app'); // import data from the other data.js file 
http.createServer((req,resp)=> {
resp.writeHead(200,{'content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();

}).listen(5000);





