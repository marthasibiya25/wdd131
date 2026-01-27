const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        return Math.round(
            13.12 + 0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        );
    }
    return "N/A";
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const chill = calculateWindChill(temperature, windSpeed);
document.getElementById("windChill").textContent = chill;

