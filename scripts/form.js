const modified = document.querySelector("#modified");
const newDate = new Date();
modified.innerHTML = `<p>Last Modification: ${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}</P>`;

const productContainer = document.querySelector("#products");
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function updateProduct(products) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.id = product.id;
        option.textContent = product.name.toUpperCase();

        productContainer.appendChild(option);
    });
}
updateProduct(products);

const submit = document.querySelector("form");
submit.addEventListener("submit",(event)=>{
    // event.preventDefault();
    let visited = Number(localStorage.getItem("visited")) || 0;
    visited++;
    localStorage.setItem("visited",visited);
})