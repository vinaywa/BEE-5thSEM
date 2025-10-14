const {webSocketServer, WebSocketServer}=require("ws")
const wss =new WebSocketServer({port:8080})
// room functionality
let rooms=new Map();

wss.on("connection",function(socket){
console.log("New User Connected");
socket.on("message",function(message){
  let parseMsg=JSON.parse(message)
  if(parseMsg.type=="join")
  {
    let roomId=parseMsg.payload.roomId;
    if(!rooms.get(roomId))
    {
        
        return socket.send("Room Id does not exist")
    }
    rooms.get(roomId).add(socket) // set function
    socket.roomId=roomId
    socket.send("You are added to room "+roomId.toString())
    console.log(rooms)
  }
  else if(parseMsg.type=="chat")
  {
    let roomId=socket.roomId;
    let message=parseMsg.payload.message;
    let allclients=rooms.get(roomId);
   allclients.forEach(s => {
    s.send(message)
   });

  }
  else if(parseMsg.type=="create")
  {
    // create a room id and send it to user
    let roomId=Math.floor(Math.random()*100000000).toString();
       rooms.set(roomId,new Set())
    //    socket.roomId=roomId
    socket.send(roomId)

  }
})
})
// download docker-desktops