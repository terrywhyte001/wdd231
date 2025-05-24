// weather.js
const weatherContainer = document.getElementById("weather-data");
const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const city = "Springfield";    // Change to your chamber's city
const country = "US";          // Change if needed
const units = "imperial";      // "imperial" for °F, "metric" for °C

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${units}&appid=${apiKey}`
    );
    if (!response.ok) throw new Error("Weather data fetch failed");

    const data = await response.json();
    const current = data.list[0];
    // Get forecasts for the next 3 days at noon (12:00:00)
    const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    weatherContainer.innerHTML = `
      <p><strong>Current Temp:</strong> ${current.main.temp.toFixed(1)}°</p>
      <p><strong>Conditions:</strong> ${current.weather[0].description}</p>
      <h3>3-Day Forecast</h3>
      <ul>
        ${forecast.map((f, i) => `<li>Day ${i + 1}: ${f.main.temp.toFixed(1)}°, ${f.weather[0].description}</li>`).join("")}
      </ul>
    `;
  } catch (err) {
    weatherContainer.innerHTML = `<p>Error loading weather data.</p>`;
    console.error(err);
  }
}

getWeather();