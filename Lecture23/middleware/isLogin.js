// middleware to verify jwt token
const jwt=require("jsonwebtoken")
function isLogin(req,res,next)
{
    let token=req.headers.authorization
    if(!token)
    {
        return res.json({
            success:false,
            message:"please provide token or login"
        })
    }
    let decode=jwt.verify(token,"ook")
    if(!decode){
        return res.json({
            success:false,
            message:"Invalid token"
        })
    }
    req.userId=decode.userId
    next()
}
module.exports=isLogin