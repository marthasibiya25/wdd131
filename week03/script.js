// set current year
document.getElementById("year").textContent = new Date().getFullYear();

// set last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// weather data (static values for assignment)
const temperature = 8; // °C
const windSpeed = 10; // km/h

const windChillElement = document.getElementById("windChill");

// calculate wind chill (metric formula)
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// apply wind chill only if conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
} else {
    windChillElement.textContent = "N/A";
}

