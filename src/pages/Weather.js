import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const api = {
  key: "efe3815bd64406f2f4bc0bdf04f30d15",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="text-center mt-5">
      <header>
        <h1>Weather Forecast</h1>

        <div>
          <input
            className="p-2 mb-4"
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-success btn-lg" onClick={searchPressed}>
            Search
          </button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div className=" m-2">
            {/* Location  */}
            <h3>{weather.name}</h3>

            {/* Temperature Celsius  */}
            <h4>{weather.main.temp}°C</h4>

            {/* Condition (Sunny ) */}
            <h4>{weather.weather[0].main}</h4>
            <h4>({weather.weather[0].description})</h4>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Weather;
