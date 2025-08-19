const express=require("express")
const router = express.Router();
const {postAddBlog,deleteOneBlog,getAllBlogs}=require("../controller/blogController")

router.post("/",postAddBlog)
//create
router.delete("/:blogId",deleteOneBlog)

router.get("/",getAllBlogs)



module.exports=router