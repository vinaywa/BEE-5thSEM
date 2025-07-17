const fs=require("fs")
const { read } = require("../IO/io.js")
async function readUsers() {
    let users1=await read("../write/a.txt")
    let users2=await read("../write/b.txt")
    console.log(users1)
    console.log(users2)

}
readUsers()

// fs.readFile("./write/a.txt","utf-8",(err,data)=>{
//     if(err)
//     {
//         return console.log(err);
//     }
//     // console.log(data[0])
//     let users=JSON.parse(data)

//     console.log(users[0])

// })