let {WebSocketServer}=require("ws")
let wss=new WebSocketServer({port:4005});
let {subscriber}=require("../shared/index")
let allSocket=[]
wss.on("connection",(socket)=>{
    console.log("new user connected")
    allSocket.push(socket)
    async function bookUpdate(){
        await subscriber.connect();
        subscriber.SUBSCRIBE("book:update",(message)=>{
            // console.log(message)
            broadcast(message)
        })
    }
    bookUpdate()
})
function broadcast(data){
    allSocket.forEach((s)=>{
        s.send(data);
    })
}