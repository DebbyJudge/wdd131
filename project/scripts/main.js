const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector("#navigation");

hamburger.addEventListener("click",()=>{
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");
})
