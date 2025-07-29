
let todo={
    id:1234,
    title:"Csk"
}
let ul=document.querySelector("#parent")
function addTodo()
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
        ul.appendChild(li);

}
addTodo(todo)