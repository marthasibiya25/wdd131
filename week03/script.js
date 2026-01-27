// Display Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        return Math.round(13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16)
            + 0.3965 * tempC * Math.pow(windKmh, 0.16));
    } else {
        return "N/A";
    }
}

// Static temp and wind speed for now
const temperature = 8; // °C
const windSpeed = 10;  // km/h

document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);

