const express=require("express")
const app=express()

app.use(express.json())


app.use("/api/v1/order",require("./routes/order"))

let PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})