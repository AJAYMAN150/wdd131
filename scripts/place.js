// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values
const temperature = 12; // °C
const windSpeed = 8; // km/h

// Wind chill calculation (Celsius version)
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// Only calculate if conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById("windChill").textContent = calculateWindChill(
    temperature,
    windSpeed
  ) + " °C";
} else {
  document.getElementById("windChill").textContent = "N/A";
}
