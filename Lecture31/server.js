const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });



// wss.on("connection",function(socket){
//     console.log("a new user connected");
//     socket.send("welcome !!!")
//     setInterval(()=>{
//         socket.send("Reliance stock price is "+" "+Math.random())
//     },1000)
// })

// wss.on("connection",function(socket){
//     console.log("a new user connected");
//     socket.send("welcome !!!")
//     socket.on("message",function(msg){
//              console.log(msg.toString())
//              if(msg.toString()=="ping")
//              {
//                 socket.send("pong")
//              }
//              else{
//                 socket.send("Not correct message")
//              }
//     })
// })

// broadcast
// let allSockets=[]
// wss.on("connection",function(socket){

//     console.log("user connected")
//     allSockets.push(socket)// console.log(allSockets)
//     socket.on("message",function(message){
//         allSockets.forEach((n)=>{
//           n.send(message.toString())
//         })
//     })

// })
