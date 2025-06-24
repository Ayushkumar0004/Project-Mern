async function checkWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "cb36b6e769420c9f0bafe2206338c399";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const temp = data.main.temp;
    const desc = data.weather[0].description.toLowerCase();

    document.getElementById("cityName").innerText = `City: ${city.toLowerCase()}`;
    document.getElementById("weatherInfo").innerText = `It's currently ${temp.toFixed(2)}°C with ${desc} in ${city}.`;

    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";

    if (temp > 30) {
      suggestions.innerHTML += `<div>💧 Water bottle</div>`;
      suggestions.innerHTML += `<div>🧢 Cap or hat</div>`;
    }

    if (desc.includes("cloud")) {
      suggestions.innerHTML += `<div>🧥 Light jacket</div>`;
    }

    if (temp < 20) {
      suggestions.innerHTML += `<div>🧤 Warm clothes</div>`;
    }

    // ✅ Set local video src
    const video = document.getElementById("weatherVideo");

    if (desc.includes("cloud")) {
      video.src = "assests/Cloudy.mp4";
    } else if (desc.includes("rain")) {
      video.src = "assests/Raining.mp4";
    } else if (desc.includes("clear")) {
      video.src = "assests/Clear weather.mp4";
    } else if (desc.includes("snow")) {
      video.src = "assests/Snowfall.mp4";
    } else if (temp > 30) {
      video.src = "assests/Hot.mp4";
    } else if (temp < 10) {
      video.src = "assests/Snowfall.mp4";
    } else {
      video.src = "videos/default.mp4"; // optional fallback
    }

    video.load();
    video.play();

  } catch (err) {
    document.getElementById("cityName").innerText = "City not found!";
    document.getElementById("weatherInfo").innerText = "";
    document.getElementById("suggestions").innerHTML = "";

    const video = document.getElementById("weatherVideo");
    video.src = "videos/default.mp4"; // fallback video
    video.load();
    video.play();
  }
}

// ENTER key support
document.getElementById("cityInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkWeather();
  }
});
