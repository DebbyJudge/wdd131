const input = document.querySelector('#favchap'); 
const button = document.querySelector('button'); 
const list = document.querySelector('#list');

let li = document.createElement("li");
let deleteBtn = document.createElement("button");

li.textContent = input.value;
deleteBtn.textContent = "❌";

li.append(deleteBtn);
list.append(li);

button.addEventListener("click", ()=>{
    if(input.value.trim() != ""){
        console.log("Empty");
    }
})