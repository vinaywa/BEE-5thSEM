const express=require("express")
const { isLogin } = require("../middleware/middleware")
const router=express.Router()
router.use(isLogin)
router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"all blogs data fetched"
    })
})
router.get("/:id",(req,res)=>{
    res.json({
        success:true,
        message:"blogs data fetched by id"
    })
})
router.post("/",(req,res)=>{
    res.json({
        success:true,
        message:"blog added succesfully"
    })
})
module.exports.router=router

