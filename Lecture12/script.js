let arr=[ "#3A9BDC",

"#FF6F61",

"#8BC34A",

"#FFEB3B",

"#9C27B0",

"#00BCD4",

"#E91E63",

"#4CAF50",

"#FF5722",

"#795548",

"#FFC107",

"#607D8B" ]


let boxSelect=document.querySelector(".box")
let btnSelect=document.querySelector(".btn")
let btn2Select=document.querySelector(".btn2")
function ChangeBG(){
const randomNumber = Math.floor(Math.random() * 12);
 boxSelect.style.backgroundColor=arr[randomNumber]
}
let id;
btnSelect.addEventListener("click",()=>{
  id=setInterval(()=>{
 ChangeBG()
 },500)
 
})
btn2Select.addEventListener("click",()=>{
    clearInterval(id)
})




