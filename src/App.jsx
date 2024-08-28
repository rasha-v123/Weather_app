import React, { useState } from "react";
import axios from "axios";
import { CurrentWeatherCard } from "./components/CurrentWeatherCard";
import { Map } from "./components/Map";

const API_KEY = "37a0291726683a58d45be3aacff4a6cb";

function App() {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [currentData, setCurrentData] = useState({});
  // const [hourlyData, setHourlyData] = useState([]);
  // const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timezone, setTimezone] = useState("");

  async function handleLocationSearch(e) {
    e.preventDefault();
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${API_KEY}`
    );
    setCurrentData(response.data);
    // setCurrentData(response.data.current);
    // setHourlyData(response.data.hourly);
    // setDailyData(response.data.daily);
    setTimezone(currentData.timezone);
    setLoading(false);
    console.log(currentData);
  }

  function handleChange(e) {
    setCoordinates((prevCoordinates) => ({
      ...prevCoordinates,
      [e.target.name]: Number(e.target.value),
    }));

    console.log(coordinates);
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-blue-300 to-green-100">
      <div className="mt-16">
        <h3 className="text-center mb-5 text-2xl text-gray-600">
          Latitude and Longitude search
        </h3>
      </div>
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleLocationSearch} className="space-y-4">
          <input
            placeholder={"Latitude"}
            onChange={handleChange}
            name={"latitude"}
            step="0.01"
            type="number"
            min="-90"
            max="90"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
          <input
            placeholder={"Longitude"}
            onChange={handleChange}
            name={"longitude"}
            step="0.01"
            type="number"
            min="-180"
            max="180"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>
      {!loading && (
        <div className="mt-16 flex space-x-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-600 text-center mb-5">
              Current Weather Information
            </h3>
            <CurrentWeatherCard weatherData={currentData} timezone={timezone} />
          </div>
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-600 text-center mb-5">
              Location Map
            </h3>
            <Map
              latitude={coordinates.latitude}
              longitude={coordinates.longitude}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
