const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Accra Ghana Temple",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 261360,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758797-wallpaper.jpg"
    },
    {
      templeName: "Alabang Philippines Temple",
      location: "Muntinlupa, Metro Manila, Phillipines",
      dedicated: "2025, May, 25",
      area: 113256,
      imageUrl:
      "https://churchofjesuschrist.org/imgs/ec00d8889229f1ef142442028072ac5f472e553d/full/500%2C/0/default"
    },
    {
      templeName: "Barcelona Spain Temple",
      location: "Sant Cugat del Vallès, Barcelona",
      dedicated: "2022, April, 3",
      area: 27500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/barcelona-spain-temple/barcelona-spain-temple-43015-main.jpg"
    },
    // Add more temple objects here...
  ];
  
  const hamburger = document.querySelector("#hamburger");
  const navigation = document.querySelector(".nav");
  
  const templesDiv = document.querySelector(".images");
  const old = document.querySelector("#old");
  const newTemps = document.querySelector("#new");
  const large = document.querySelector("#large");
  const small = document.querySelector("#small");
  const home = document.querySelector("#home");
  
  hamburger.addEventListener("click", ()=>{
      navigation.classList.toggle("open");
  })
  
  function updateTemple (temples) {
      temples.forEach(temple => {
      const container = document.createElement("div");
      const name = document.createElement("h3");
      const location = document.createElement("p");
      const dedicated = document.createElement("p");
      const area = document.createElement("p");
      const image = document.createElement("img");
  
      name.textContent = temple.templeName;
      location.textContent = `Location: ${temple.location}`;
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
      area.textContent = `Size: ${temple.area} square feet`;
      image.src = temple.imageUrl;
      image.alt = `${temple.templeName} Temple`;
      image.loading = "lazy";
  
      container.appendChild(name);
      container.appendChild(location);
      container.appendChild(dedicated);
      container.appendChild(area);
      container.appendChild(image);
  
      templesDiv.appendChild(container);
  })}
  
  updateTemple(temples);
  home.addEventListener("click", ()=>{
      templesDiv.innerHTML = "";
      updateTemple(temples);
  })
  old.addEventListener("click", ()=>{
      templesDiv.innerHTML = "";
      const oldTemples = temples.filter(temple => temple.dedicated < "2000");
      updateTemple(oldTemples);
  })
  newTemps.addEventListener("click", ()=>{
      templesDiv.innerHTML = "";
      const newTemples = temples.filter(temple => temple.dedicated > "2000");
      updateTemple(newTemples);
  })
  large.addEventListener("click", ()=>{
      templesDiv.innerHTML = "";
      const largeTemple = temples.filter(temple => temple.area > 90000);
      updateTemple(largeTemple);
  })
  small.addEventListener("click", ()=>{
      templesDiv.innerHTML = "";
      const smallTemple = temples.filter(temple => temple.area < 10000 );
      updateTemple(smallTemple);
  })
  
  const infoDate = document.querySelector('.getdate');
  date = new Date().getDate();
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  seconds = new Date().getSeconds();
  infoDate.innerHTML = `${date}/${month}/${year} ${hour}:${minute}:${seconds}`;