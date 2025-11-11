const {createClient}=require("redis")

let subscribe=createClient();
async function notify() {
    await subscribe.connect();
    await subscribe.SUBSCRIBE("notify_me",(data)=>{
        console.log(data)
    });
}
notify()
