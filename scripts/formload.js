const url = window.location.href.split("?")[1].split("&");
console.log(url);
const details = document.querySelector(".form");
details.innerHTML = `
<p>Thanks for your submission</p>
<p>Number of times submitted: ${localStorage.getItem("visited")}</p>
`;