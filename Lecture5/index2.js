// let p = new Promise((resolve, reject)=>{
//     resolve("okay");
// })
// console.log(p);
// p.then((data)=>{
//     console.log(data);
//     console.log("ur promise is completed")
// })
// .catch((err)=>{
//     console.log(err);
// })
let users=[

    {
      id:1,
      age:16,
      name:"pankaj"
    }
    ,
    {
       id:1,
      age:15,
      name:"vikas"
    }
];
function isEligible(id){
    // find user in db
    return new Promise((resolve,reject)=>{

    
    let user = users.filter((user)=> user.id===id);
    console.log(user);
    if(!user) return reject("No User Found");
    if(user.age>=15)
    {
        return resolve("Eligible for vote")
    }
    else{
        return reject("Not Eligible")
    }
    });

}
isEligible(1).then((data)=>{
  console.log(data)
})

.catch((err)=>{
    console.log(err)
})
console.log("hii")