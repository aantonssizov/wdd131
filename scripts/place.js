function caluculateWindChill(temperature, windSpeed) {
    let windChill = 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
    return windChill.toFixed(1);
}

let temperature = 9;
let windSpeed = 8;

let windChillElm = document.querySelector("span#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    let windChill = caluculateWindChill(temperature, windSpeed);
    windChillElm.textContent = windChill + "°C";
} else {
    windChillElm.textContent = "N/A";
}
