const express=require("express")
const app=express()
let {publisher}=require("../shared/index")
app.use(express.json())


app.use("/api/v1/order",require("./routes/order"))

let PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})

publisher.connect()
.then(()=>{
    console.log("Publisher Connected")
})