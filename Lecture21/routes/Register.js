const express=require("express")
const router=express.Router()
let UserModel=require("../model/user")




router.post("/",async(req,res)=>{
    console.log("Running Login")
    let email=req.body.email;
    let password=req.body.password

    let user={
        email:email,
        password:password

    }

    let newUser=new UserModel(user)
    await newUser.save()

    res.send({
        success:true,
        messsage:"SuccesFully Registered"
    })

})
module.exports=router