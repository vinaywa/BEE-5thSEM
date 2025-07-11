 let products =[
    {
        name:"samsung",
        amount:70000,
        quantity:10
    }
    ,{
        name:"Iphone 16",
        amount:10000,
        quantity:1

    }
]
  let accbal=200000;
 function buyProduct(product_name,cb)
    {
        return new Promise((resolve,reject)=>{

       
        let isproduct=null;
        for(var i=0;i<products.length;i++)
        {
            if(products[i].name === product_name){
                isproduct=products[i];
                break;
            }
        }

        if(!isproduct)
        {
            return reject("Product is not there")
        }
        else{
           
           return resolve(isproduct.amount)
        }
         });
    //  console.log(isproduct)
    }

    function deductAmount(product) {
        return new Promise((resolve,reject)=>{

      
  var newbal = accbal - product;
 
  if (newbal < 0) {
    return reject("Low Balance! ");
  } else {
   accbal=newbal
    return resolve(accbal);
  }
    })
}

 buyProduct("samsung")
     .then((data)=>{
     
       return deductAmount(data)
       
     })
     .then((msg)=>{
        console.log(msg);
     })
     .catch((err)=>{
      console.log(err);

     })

async function myFunc(){
    try{
    let amount=await buyProduct("samsung");
   let msg=await deductAmount(amount);
//    console.log(msg)
    }
    catch(error)
    {
        console.log(error)
    }

}
myFunc()
console.log("start")
console.log("end")
