const express=require("express");
const { default: mongoose } = require("mongoose");
const app=express()
let PORT=3000;
let LoginRoute=require("./routes/Login")
let RegisterRoute=require("./routes/Register")
mongoose.connect("mongodb://127.0.0.1:27017/AuthDB")
.then(() => {
    console.log("DB Connected Successfully");
})
.catch((err) => {
    console.error("DB Connection Error:", err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth/login",LoginRoute)
app.use("/auth/register",RegisterRoute)
app.use("/home",isLogin,(req,res)=>{
    console.log("Granted Permission")
})
app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`);
})