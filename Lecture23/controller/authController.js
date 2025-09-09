const USER=require("../model/user")
const jwt=require("jsonwebtoken")

module.exports.verifyLogin=async(req,res)=>{
    let {email,password}=req.body;
    let userExist=await USER.findOne({email:email})
    if(!userExist)
    {
         return res.json({
        success:false,
        message:"User not found Sign UP"
    })
    }
    if(userExist.password!=password)
    {
         return res.json({
        success:false,
        message:"PassWord Dont Match"
    })
    }
    let token=jwt.sign({"userId":userExist._id},"ook")
    res.json({
        success:true,
        message:"Login Successful",
        token:token
    })

}