const modified = document.querySelector("#lastModified");
const date = new Date();
modified.innerHTML = `<p>Last Modification: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>`;

const temp = document.querySelector(".temperature");
const condition = document.querySelector(".conditions");
const wind = document.querySelector(".wind");
const windchill = document.querySelector(".windchill");

const calculateWindChill = (temperature,speed) => {
    let result = 0;
    if (temperature <= 10 && speed > 4.8) {
        result =  13.12 + (0.6215*temperature) - (11.37 * speed ** 0.16) + (0.3965 * temperature * speed ** 0.16)
        result = result.toFixed(2);
    }
    else {
        result = "N/A"
    }
    return result;
}
windchill.textContent = calculateWindChill(temp.textContent,wind.textContent);