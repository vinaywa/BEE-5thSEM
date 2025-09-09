const express=require("express")
let UserModel=require("../model/user")
const router=express.Router();
const jwt=require("jsonwebtoken")
router.post("/",async(req,res)=>{
    const { email, password } = req.body;

  let UserExist= await UserModel.findOne({email})

  if(!UserExist)
  {
   return res.json({
        success:false,
        message:"User Does Not exists"
    })

  }

  if(password!=UserExist.password)
  {
     return res.json({
        success:false,
        message:"Invalid Password"
    })
  }
 

   let token= jwt.sign({"user":UserExist},"rrrr")
  return res.json({
     success:true,
        message:"Login SuccessFully",
        token:token
  })


})
module.exports=router;