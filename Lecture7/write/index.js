const fs=require("fs")
const { write }= require("../IO/io.js")
const { read } = require("../IO/io.js")
let users=[
    {
        id:1,
        name:"Vansh",
        age:"27"
    },
    {
        id:2,
        name:"Prabhu",
        age:"29"

    },
]

// fs.writeFile("b.txt",JSON.stringify(users),(err)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log("users written")
// })
async function writeFile(file1,file2,file3) {
    let user1=await read(file1)
    let user2=await read(file2)
    // let a=JSON.parse(user1)
    // let b=JSON.parse(user2)
    let allusers=user1.concat(user2)
    let msg=await write(file3,JSON.stringify(allusers));
    console.log(msg)
}
writeFile("a.txt","b.txt","../read/allusers.txt")










