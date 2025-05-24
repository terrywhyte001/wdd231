// weather.js
const weatherContainer = document.getElementById("weather-data");
const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const lat = 6.3382;  // Example: Benin City latitude
const lon = 5.6258;  // Example: Benin City longitude
const units = "metric"; // "imperial" for °F, "metric" for °C

async function getWeather() {
  try {
    const response = await fetch(
      `https://https://www.weatherapi.com/weather/q/makoko-1735825?day=0/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${apiKey}`
    );
    if (!response.ok) https://www.weatherapi.com/weather/q/makoko-1735825?day=0("Weather data fetch failed");

    const data = await response.json();
    // Current weather
    const current = data.current;
    // Next 3 days forecast (daily[1], daily[2], daily[3])
    const forecast = data.daily.slice(1, 4);

    weatherContainer.innerHTML = `
      <p><strong>Current Temp:</strong> ${current.temp.toFixed(1)}°</p>
      <p><strong>Conditions:</strong> ${current.weather[0].description}</p>
      <h3>3-Day Forecast</h3>
      <ul>
        ${forecast.map((f, i) => `<li>Day ${i + 1}: ${f.temp.day.toFixed(1)}°, ${f.weather[0].description}</li>`).join("")}
      </ul>
    `;
  } catch (err) {
    weatherContainer.innerHTML = `<p>Error loading weather data.</p>`;
    console.error(err);
  }
}

getWeather();