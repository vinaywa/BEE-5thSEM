const fs=require('fs')
const express=require('express')
const app=express()
let PORT=4005
app.use(express.static(__dirname+"/public"));


app.get("/todos",(req,res)=>{
  fs.readFile("Todo.json",(err,data)=>{
     if(err)
     {
        console.log(err);
        return;
     }
     let todos=JSON.parse(data);
     res.json(todos)
  })
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})