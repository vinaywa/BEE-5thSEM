let p=new Promise((resolve,reject)=>{
       let age=18;
       if(age>18)
       {
        return resolve("You are eligible to vote");
       }
      
        return reject("You are not eligible to vote")
       

})
p
.then((data)=>{
console.log(data);
})
.catch((err)=>{
    console.log(err)
})
console.log("hi")
console.log("ok")
function add(a,b)
{
    return a+b;
}
console.log(add(2,3))
console.log("END");