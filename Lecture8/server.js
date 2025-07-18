

const express=require("express")
const app=express()
 app.get("/",(req,res)=>{
    console.log(req);
    // res.send("<h1>HELLOOO</h1>")
    res.json({
        name:"Vinay",
        address:"Mohali",
        isPresent:true
    })

 })
 app.get("/art",(req,res)=>{
    res.json({
        name:"Vinay",
        author:"English",
        isPresent:false
    })
 })
 app.get("/home",(req,res)=>{
    res.send("<h1>HOME PAGE LOADED</h1>")
 })
//params
app.get("/users/:id",(req,res)=>{
    
    res.send(`<h1>My user id is: ${req.params.id}</h1`);
    console.log(req.params.id)
    // res.send("Ok")
})
// query parameters
//
app.get("/blogs",(req,res)=>{
    console.log(req.query.title)
    res.send("got it")
})

// console.log(app)
app.listen(2222,()=>{
    console.log("Server running on 2222")
}) //port is communication endpoint

