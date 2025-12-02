const express =require("express")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const User=require("./model/userSchema")

app.post("/api/users/register",async (req,res)=>{
    const {name,email,password}=req.body;
    const userExist=await User.findOne({email});
    if(userExist)
    {
        return res.json({
           success:true,
           message:"User already exists"
        })
    }
    let newUser=await User.create({
        name:name,
        email:email,
        password:password
    })
    res.json({
        success:true,
        message:"User registered succesfully",
        data:newUser
    })
})


module.exports=app;