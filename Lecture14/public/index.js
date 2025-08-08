let container=document.querySelector(".showusers");
async function showUsers(URL){
    const data= await fetch(URL);
    const res= await data.json()
     res.map((data)=>{
      console.log(data)
    let id=data.id;
    let name=data.username
    let company=data.company;
    displayUser(id,name,company)
})
}
function displayUser(id,name,company){
   const newDiv=document.createElement('div');
    newDiv.innerHTML = 
  `ID: ${id}<br>` + 
  `Name: ${name}<br>` + 
  `Company: ${company}`;
  newDiv.classList.add('info-box');

  container.appendChild(newDiv);
     
}


function getUser(URL)
{
  // send request to this URL To get users data
  fetch(URL)
  .then((res)=>{
    

   return res.json();
   
  })
  .then((data)=>{
    
    console.log(data)
  })
  .catch((err)=>{
    console.log(err)
  })

}
// getUser("http://localhost:4000/users")
showUsers("http://localhost:4000/users")
