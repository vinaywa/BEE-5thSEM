function m1(req,res,next){

      console.log("running middleware 1....")
      req.user={
        id:1,
        username:"Vinay"

      }   
      next()
}
function m2(req,res,next)
{
   console.log("running middleware 2")
   console.log(req.user)
   req.isAdmin=true;
   next()
}
function checkAdmin(req,res,next)
{
    console.log("running checkAdmin")
  let {name}=req.query;
  if(name=="Vinay")
  {
    res.isAdmin=true;
   return next()
  }
  console.log("After Next")
  res.json({
    succes:false,
    message:"you are not an admin"

  })
}
function isLogin(req,res,next)
{
  console.log("Succesfully running isLogin")
   res.json({
    success:true,
    message:"Logged In Successfully"
   })
  //  next()
}
module.exports.isLogin=isLogin
module.exports.checkAdmin=checkAdmin
module.exports.m1=m1;
module.exports.m2=m2;
