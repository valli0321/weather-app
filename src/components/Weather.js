import React, { useCallback, useState } from "react";
import GetWeather from "./GetWeather";
import ShowWeather from "./ShowWeather";
import "./styles.css";
import Footer from "./Footer";
import CircularProgress from "@mui/material/CircularProgress";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorObj, setErrorObj] = useState({});
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("celcius");
  
  const handleConversion = useCallback(() => {
    const temp = weatherData.main.temp;
    const temp_max = weatherData.main.temp_max;
    const temp_min = weatherData.main.temp_min;
    if (unit === "celcius") {
      setUnit("fahrenheit");
      setWeatherData({
        ...weatherData,
        main: {
          // ...main,
          temp: Number.parseFloat((9 * temp) / 5 + 32).toFixed(2),
          temp_max: Number.parseFloat((9 * temp_max) / 5 + 32).toFixed(2),
          temp_min: Number.parseFloat((9 * temp_min) / 5 + 32).toFixed(2),
        },
      });
    }
    if (unit === "fahrenheit") {
      setUnit("celcius");
      setWeatherData({
        ...weatherData,
        main: {
          // ...main,
          temp: Number.parseFloat((5 * (temp - 32)) / 9).toFixed(2),
          temp_max: Number.parseFloat((5 * (temp_max - 32)) / 9).toFixed(2),
          temp_min: Number.parseFloat((5 * (temp_min - 32)) / 9).toFixed(2),
        },
      });
    }
  },[weatherData]);
    
  return (
    <div className="container">
      <h1 className="heading mb-4">Weather App</h1>
      <GetWeather
        city={city}
        setCity={setCity}
        eatherData={weatherData}
        setWeatherData={setWeatherData}
        errorObj={errorObj}
        setErrorObj={setErrorObj}
        loading={loading}
        setLoading={setLoading}
      />
      {weatherData ? (
        loading ? (
          <CircularProgress color="secondary" className="mt-5" />
        ) : (
          <ShowWeather
            weatherData={weatherData}
            loading={loading}
            unit={unit}
            handleConversion={handleConversion}
          />
        )
      ) : (
        <div className="error">{errorObj.error}</div>
      )}
      {/* {loading ? <CircularProgress color="success"/> : <ShowWeather weatherData={weatherData} loading={loading}/> }
      {errorObj && <div className="error">{errorObj.error}</div>} */}

      <Footer />
    </div>
  );
};

export default Weather;
