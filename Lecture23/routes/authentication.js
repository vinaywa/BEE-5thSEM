const express=require("express")
const router =express.Router();

const{verifyLogin}=require("../controller/authController")

router.post("/",verifyLogin)

module.exports=router