const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const USER=require("./model/user")
const Blog = require("./model/blog");
const mongoose = require('mongoose'); //common js syntax
// import mongoose from 'mongoose'; //ES6 module syntax
mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));

//create
app.post("/blogs",async (req,res)=>{
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


})
//create
app.delete("/blogs/:blogId",async (req,res)=>{
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

})


app.post("/users",async (req,res)=>{
    let username=req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let user={
        username:username,
        email:email,
        password:password
    }
    let newUser =  new USER(user);
    await newUser.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db

    res.json({
        success:true,
        message:"user added successfully",
        data:newUser
    })


})
app.get("/fetchuser",async(req,res)=>{ //fetch data using find method
    let allUsers = await USER.find();

    res.json({
        success:true,
        message:"all users fetch successffully",
        data:allUsers
    })
})
app.get("/fetchblogs",async(req,res)=>{

    let Blogs=await Blog.find();
    res.json({
      success:true,
      message:"all blogs fetched",
      data:Blogs

    })


})
app.get("/fetchuser/:id",async(req,res)=>{//finding blog by their id name
    let id = req.params.id;
    //we can use findBYiD and findByOne
    let user = await USER.findById(id);
    res.json({
        success:true,
        message:"blog fetch successfully",
        data:user
    })
})
app.listen(3000,()=>{
    console.log("server running on port 3000");
})