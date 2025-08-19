const express=require("express")
const router=express.Router();
const {addNewUsers,getAllUsers,getUserById}=require("../controller/userController")
router.post("/",addNewUsers)
router.get("/",getAllUsers)

router.get("/:id",getUserById)

module.exports=router