const express=require("express")
const router =express.Router();
const isLogin=require("../middleware/isLogin")
const {addNewBlog,deleteBlogs,fetchAllBlogs}=require("../controller/blogController")
router.post("/",isLogin,addNewBlog)

router.delete("/:blogId",deleteBlogs)

router.get("/fetchblogs",fetchAllBlogs)


module.exports=router