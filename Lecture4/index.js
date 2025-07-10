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
// function buyProduct(product_name,cb)
// {
     // some async operation
     // 1. get product detail from db
     // 2. write order detail in user db
//
     // 
//     setTimeout(()=>{
//         console.log("Order Complete");
//         cb();
//     })
// }

//   buyProduct("Iphone",function(){
//       console.log("product is purchased (Call back)")
//   })


    // console.log("product is purchased")
       let accbal = 200000;
    function buyProduct(product_name,cb)
    {
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
            cb("product is not available",null);
        }
        else{
           
            cb(null,isproduct.amount);
        }
    //  console.log(isproduct)
    }
    buyProduct("samsung",function(err,amount){
        if(err)
        {
            return console.log(err)
        }
            console.log(amount)
         deductAmount(amount,function(err,message){
            if(err) return console.log(err)
                console.log(message)
         })
    })


function deductAmount(product, cb) {
  var newbal = accbal - product;
//   console.log("New Balance (calculated):", newbal);

  if (newbal < 0) {
    cb("LOW BALANCE", null);
  } else {
    accbal = newbal;  
    cb(null, "Your new balance is updated");
  }
}
