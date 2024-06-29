import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97bed167ec49bff56e6c1b63daef9c86&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div>
        <h2> The weather of {city} is : </h2>
        <ul className="weatherDescription">
          <li>Temperature: {weather.temperature} °C</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSearch}>
        <input
          type="Search"
          placeholder="Search a city"
          onChange={updateCity}
        />
        <input type="button" value="Search" />
      </form>
    );
  }
}