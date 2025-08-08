function getCommentData()
{

    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
        console.log(res?.data)
    })


}
async function getCommentData2()
{
   try{
   const res= await axios.get("https://jsonplaceholder.typicode.com/comments")
   console.log(res.data)
   }
   catch(err)
   {
    console.log(err);
     
   }
   
    

}
// getCommentData2()
// getCommentData()
function adduser(email,pswd)
{

    axios.post('/user', {
    email: email,
    pswd: pswd
  })
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
   console.log(err.message)
  })

}
adduser("vinay@123","hiivinay")