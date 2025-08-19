const Blog = require("../model/blog");
module.exports.postAddBlog=async (req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let userId=req.body.userId
    let finding_user=await USER.findById(userId);
    if(!finding_user)
    {
        return res.json({
            success:false,
            message:"User not found"
        })
    }
    let blog = {
        title:title,
        body:body,
        date:Date.now()
    }
    let newBlog =  new Blog(blog);
    await newBlog.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db
    let user=await USER.findById(userId);
    user.blogs.push(newBlog._id);
    await user.save()       



    res.json({          
        success:true,
        message:"blog added successfully",
        data:newBlog
    })


}
module.exports.deleteOneBlog=async (req,res)=>{
    let blogId=req.params.blogId;
    let userId=req.body.userId;
    let blogExist=await Blog.findById(blogId);
    if(!blogExist)
    {
        return res.json({
            success:false,
            message:"blog does not exist"

        })
    }
    if(blogExist.userId!=userId)
    {
         return res.json({
            success:false,
            message:"permission denied"

        })
    }
    await Blog.findByIdAndDelete(blogId);

}

module.exports.getAllBlogs=async(req,res)=>{

    let Blogs=await Blog.find();
    res.json({
      success:true,
      message:"all blogs fetched",
      data:Blogs

    })
}