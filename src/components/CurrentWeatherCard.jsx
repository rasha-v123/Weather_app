import { useEffect } from "react";

export function CurrentWeatherCard({ weatherData }) {
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
    console.log(CurrentTime);
    console.log(SunriseTime);
    console.log(SunsetTime);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg min-w-96">
      <div className="bg-blue-500 text-white text-center py-4">
        <h2 className="text-2xl font-semibold">Current Weather Information</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Current Date: </span>
            <span>{weatherData.dt}</span>
          </li>
          <li className="flex justify-between">
            <span>Current Time: </span>
            <span>{weatherData.dt}</span>
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
            <span>{weatherData.sys.sunrise}</span>
          </li>
          <li className="flex justify-between">
            <span>Sunset: </span>
            <span>{weatherData.sys.sunset}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
