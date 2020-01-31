//npm install --save express http url ws

//require is like import, you can find in package.json
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
//use is a middleware that allows us to serve up all the contents in static public as static resources
app.use(express.static('public'));
//http is stateless, like sending a letter through snailmail, http is out of your hands once you send a request; no way to add additional data
const server = http.createServer(app);
//websockets is a new protocol - its like a tin cans with a string between them - the connection stays open and you can send data back and forth
const wss = new WebSocket.Server({server:server});
wss.on('connection',function(we,request){
    console.log('Connected!')
});

server.listen(8080,function(){
    console.log('App listening on port 8080');
});