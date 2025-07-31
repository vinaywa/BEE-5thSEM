fetch("http://localhost:4000/todos")
.then((res)=>res.json())
.then((data)=>console.log(data))