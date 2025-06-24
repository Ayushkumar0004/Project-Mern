async function checkWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "cb36b6e769420c9f0bafe2206338c399";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const temp = data.main.temp;
    const desc = data.weather[0].description.toLowerCase();
    const iconCode = data.weather[0].icon; // "01d", "01n"
    const isDay = iconCode.includes("d");

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

    const video = document.getElementById("weatherVideo");

    if (!isDay) {
      video.src = "https://cdn.pixabay.com/vimeo/1510178/   .mp4?width=1280&hash=9de0ee325c3bb5d04bcabbe3d2873246";
    } 
     if (desc.includes("cloud")) {
      video.src = "https://cdn.pixabay.com/vimeo/278750/Stormy_Clouds_1080p.mp4?width=1280&hash=12d1b9ab90e601e3f1cc8ebd3e56b9f5d9eb4e6b";
    } else if (desc.includes("rain")) {
      video.src = "https://cdn.pixabay.com/vimeo/2417436/Rain_Window_1080p.mp4?width=1280&hash=edf7fa8bb7ad0c6cbf5289b7aebf7dd4";
    } else if (desc.includes("clear")) {
      video.src = "https://cdn.pixabay.com/vimeo/4002196/Summer_Heat_1080p.mp4?width=1280&hash=fded9e8dc7d2abfd5d0e51f1635de9d1";
    } else if (desc.includes("snow")) {
      video.src = "https://cdn.pixabay.com/vimeo/3068786/Winter_Snowy_Forest_1080p.mp4?width=1280&hash=2c5ae748ecb799e332228983d57ef9ea";
    } else if (temp > 30) {
      video.src = "https://cdn.pixabay.com/vimeo/4002196/Summer_Heat_1080p.mp4?width=1280&hash=fded9e8dc7d2abfd5d0e51f1635de9d1";
    } else if (temp < 10) {
      video.src = "https://cdn.pixabay.com/vimeo/3068786/Winter_Snowy_Forest_1080p.mp4?width=1280&hash=2c5ae748ecb799e332228983d57ef9ea";
    } else {
      video.src = "https://cdn.pixabay.com/vimeo/9192/Trees_Breeze_1080p.mp4?width=1280&hash=9a1ac59aa5dc9e7341cf86042df23884";
    }

    video.load();
    video.play();

  } catch (err) {
    document.getElementById("cityName").innerText = "City not found!";
    document.getElementById("weatherInfo").innerText = "";
    document.getElementById("suggestions").innerHTML = "";

    const video = document.getElementById("weatherVideo");
    video.src = "https://cdn.pixabay.com/vimeo/9192/Trees_Breeze_1080p.mp4?width=1280&hash=9a1ac59aa5dc9e7341cf86042df23884";
    video.load();
    video.play();
  }
}

document.getElementById("cityInput").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkWeather();
  }
});
