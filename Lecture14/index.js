const express =require("express");
const fs=require('fs')
const app=express()
let PORT=4000;
app.use(express.static(__dirname+"/public"))
app.get("/users",(req,res)=>{
    fs.readFile("user.json","utf-8",function(err,data){
      if(err)
      {
        return res.send(err)
      }
      let users=JSON.parse(data)
      res.json(users)
    })
})
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})