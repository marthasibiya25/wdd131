const temperature = 8; // °C
const windSpeed = 10;  // km/h

function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        return Math.round(
            13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)
        );
    } else {
        return "N/A";
    }
}

document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("year").textContent = new Date().getFullYear();

