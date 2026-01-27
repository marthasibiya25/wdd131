// Display current year & last modified
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Wind chill calculation
function calculateWindChill(temp, windSpeed) {
    // Formula for °C, km/h
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Static temperature & wind speed
const temp = 5; // °C
const windSpeed = 15; // km/h
const windChillElem = document.getElementById('windChill');

if (temp <= 10 && windSpeed > 4.8) {
    windChillElem.textContent = calculateWindChill(temp, windSpeed).toFixed(1) + "°C";
} else {
    windChillElem.textContent = "N/A";
}
