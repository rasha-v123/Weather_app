import React, { useEffect, useState } from "react";

export function CurrentWeatherCard({ weatherData, timezone }) {
  const [times, setTimes] = useState({
    CurrentDate: "",
    CurrentTime: "",
    SunriseTime: "",
    SunsetTime: "",
  });

  useEffect(() => {
    let CurrentDateString = new Date(weatherData.dt * 100).toString();
    // let CurrentDateString = CurrentDateObject.toString();
    let SunriseTimeString = new Date(weatherData.sys.sunrise * 100).toString();
    let SunsetTimeString = new Date(weatherData.sys.sunset * 100).toString();

    let CurrentDate =
      CurrentDateString.substring(0, 3) +
      ", " +
      CurrentDateString.substring(4, 10) +
      ", " +
      CurrentDateString.substring(11, 15);
    console.log(CurrentDate);

    let CurrentTime = CurrentDateString.substring(16, 24);
    let SunriseTime = SunriseTimeString.substring(16, 24);
    let SunsetTime = SunsetTimeString.substring(16, 24);
    // console.log(CurrentTime);
    // console.log(SunriseTime);
    console.log(weatherData);
    setTimes({
      ...times,
      CurrentDate: CurrentDate,
      CurrentTime: CurrentTime,
      SunriseTime: SunriseTime,
      SunsetTime: SunsetTime,
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg min-w-96">
      <div className="bg-blue-500 text-white text-center py-4">
        <h2 className="text-2xl font-semibold">Current Weather Information</h2>
      </div>
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 rounded-full p-2">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
              className="w-20 h-20"
            />
          </div>
        </div>
        <div className="text-center mb-4">
          <p className="text-xl font-medium text-gray-700">
            {weatherData.weather[0].main}
          </p>
          <p className="text-gray-500 capitalize">
            {weatherData.weather[0].description}
          </p>
          <p className="text-gray-500">{timezone}</p>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Current Date: </span>
            <span>{times.CurrentDate}</span>
          </li>
          <li className="flex justify-between">
            <span>Current Time: </span>
            <span>{times.CurrentTime}</span>
          </li>
          <li className="flex justify-between">
            <span>Temparature: </span>
            <span>{Math.round(weatherData.main.temp)} F</span>
          </li>
          <li className="flex justify-between">
            <span>Feels like: </span>
            <span>{Math.round(weatherData.main.feels_like)} F</span>
          </li>
          <li className="flex justify-between">
            <span>Sunrise: </span>
            <span>{times.SunriseTime}</span>
          </li>
          <li className="flex justify-between">
            <span>Sunset: </span>
            <span>{times.SunsetTime}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
