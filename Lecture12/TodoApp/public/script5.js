let todoInput=document.querySelector(".todoTitle");
let todoForm=document.querySelector("#todoform");
let todoContainer=document.querySelector(".todoContainer");
let todoArray=[];

fetch("http://localhost:4000/todos")
.then((res)=>res.json())
.then((data)=>{
    todoArray=data
    showallTodo(todoArray)
})
// fetch('http://localhost:4000/todos', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify([
//     { id: "123455660", title: "delhi" },
//     { id: "2566660", title: "punjab" },
//     { id: "388566660", title: "haryana" }
//   ])
// })
// .then(response => response.json())
// .then((data) => {
//     todoArray=data
// showallTodo(todoArray)
// })
// .catch(error => console.error('Error:', error));



todoForm.addEventListener("submit",function(e){
    e.preventDefault()
 let value=inputValue();
 let newTodo={
    id:Math.floor(Math.random*10000),
    title:value
 }
 todoArray.push(newTodo)
//  addTodo(newTodo);
showallTodo(todoArray)
 todoInput.value=""
})

function inputValue()
{
    return todoInput.value;
}
function addTodo(todo)
{
    
    let li=document.createElement("li")
    li.setAttribute("id",`${todo.id}`)
    li.innerHTML=` <div>
           <input type="checkbox" name="" id="checkbox">
           <h1>${todo.title}</h1>
           <div>
            <button class="edit">✏️</button>
            <button class="delete">❌</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos ratione optio libero rerum porro!</p>
           </div>
        </div>`
        todoContainer.appendChild(li);

}

function showallTodo(todoArray){
    todoContainer.innerHTML=""
    todoArray.forEach(todo => {
        addTodo(todo);
    });
}
