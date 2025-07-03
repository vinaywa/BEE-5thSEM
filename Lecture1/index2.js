const { rejects } = require("assert");
const fs=require("fs");
const { resolve } = require("path");
console.log(fs);
console.log("start");
setTimeout(()=>{
    console.log("settimeout");
},0)

setImmediate(()=>{
    console.log("set Immediate");
})

// fs.readFile('c:/Users/infor/Videos/5thSem/BED_5thsem/Lecture1/demo.txt',"utf-8",(data)=>{
//     console.log(data);
//     setTimeout(()=>{
//         console.log("settimeout2");
//     },0)
//     setImmediate(()=>{
//       console.log("set immediate 2")
//     })
// })



function someTask()
{
    return new Promise((resolve,reject)=>{
        resolve("promise");
    });
}
someTask().then((data)=>{
    console.log(data)
})


.catch((err)=>{
    console.log("next tick")
})
console.log("end");