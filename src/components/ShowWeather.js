import React from "react";
import "./styles.css";
import Button from "@mui/material/Button";

const ShowWeather = React.memo(({ weatherData, unit, handleConversion }) => {
  console.log("Show Weather rendered");

  return (
    <div className="d-flex flex-column align-items-center">
      <h3 className="city mt-5">
        {weatherData.name.toUpperCase()}, {weatherData.sys.country}
      </h3>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <h1 className="temp">
        {weatherData.main.temp}{" "}
        {unit === "celcius" ? <span>&#8451;</span> : <span>&#8457;</span>}{" "}
      </h1>

      <p className="descrp">{weatherData.weather[0].description}</p>
      <div className="min-max mb-3">
        {weatherData.main.temp_min}{" "}
        {unit === "celcius" ? <span>&#8451;</span> : <span>&#8457;</span>} /{" "}
        {weatherData.main.temp_max}{" "}
        {unit === "celcius" ? <span>&#8451;</span> : <span>&#8457;</span>}
      </div>
      {unit === "celcius" ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleConversion}
        >
          In &#8457;
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleConversion}
        >
          {" "}
          In &#8451;
        </Button>
      )}
    </div>
  );
});

export default ShowWeather;
