const OrderBook = require("../service/orderbook");

const ob=new OrderBook("BTCUSD")
const {publisher}=require("C:/Users/infor/Videos/5thSem/BED_5thsem/Lecture38/shared/index")
module.exports.postPlaceOrder = async(req,res)=>{
// user,quantity,type,price,side,symbol
let {type,side,price,quantity,userName}=req.body;
// basic validation

let response=ob.placeOrder(price,quantity,type,side,userName);
await publisher.connect();
await publisher.PUBLISH("Book:Update",JSON.stringify(response.book))
console.log(response)
res.json(response)
}
//place order