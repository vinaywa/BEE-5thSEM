let edit=document.querySelector(".edit")
let del=document.querySelector(".delete")
// 
// parent 
//child
//siblings
//
//
console.dir(edit.nextElementSibling.nextElementSibling)
console.dir(del.previousElementSibling)

console.log(edit.parentElement.previousElementSibling)
console.log(del.parentElement.parentElement.parentElement.getAttribute("id"))