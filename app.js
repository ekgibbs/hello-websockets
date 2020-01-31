//npm install --save express http url ws

//require is like import, you can find in package.json
const express = require('express');
const http = require('http');

const app = express();
//use is a middleware that allows us to serve up all the contents in static public as static resources
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(8080,function(){
    console.log('App listening on port 8080');
});