const fs=require("fs")

fs.readFile("./write/a.txt","utf-8",function(err,data){
    if(err)
    {
        return console.log(err)
    }
    let user1=JSON.parse(data);
     console.log(user1)
    fs.readFile("./write/b.txt","utf-8",function(err,data)
    {
        if(err)
        {
            return console.log(err)
        }
        let user2=JSON.parse(data)
        console.log(user2)
        let alluser=user1.concat(user2)
        fs.writeFile("allusers.txt",JSON.stringify(alluser),function(err){
            if(err)
            {
                console.log(err)
            }
            console.log("Success")
        })
    })


})