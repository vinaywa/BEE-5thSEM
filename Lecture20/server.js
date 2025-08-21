const express=require("express");
const { m1, m2, checkAdmin } = require("./middleware/middleware");
const app=express()
app.use(express.static(__dirname+"/public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
let blogRoutes=require("./routes/blogRoutes")
console.log(blogRoutes)
let PORT=3006;
app.use(m1)       // middlewares run in the order they are called 
// app.use(m2)

app.get("/home",(req,res)=>{
    console.log("Succesfully running controller")
    res.json({
        success:true,
        message:"welcome to home page"
    })
})
 app.use(m2) // it will not run if called here

app.get("/dashboard",checkAdmin,(req,res)=>{
    if(req.isAdmin)
    {
        return res.json({
            success:true,
            message:"Admin Dashboard"
        })
    }
    return res.json({
            success:false,
            message:"Not Authorized"
    })
})
app.use("/api/blogs",blogRoutes.router)

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})  

