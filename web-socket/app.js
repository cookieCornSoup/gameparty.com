const app = require('express')();
const http = require('http');
const socketio = require('socket.io'); 
const server = http.createServer(app);


 
app.get('/client', (req, res)=> res.send("hello"));
const io = socketio(server);
io.on("connection", (socket)=>{
    console.log(socket.request +", 연결됨");
});
 

server.listen(3002, ()=>{
    console.log("서버시작");

});