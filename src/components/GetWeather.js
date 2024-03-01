import React from "react";
import { getWeather } from "./Services";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./styles.css";

const GetWeather = ({
  city,
  setCity,
  setWeatherData,
  errorObj,
  setErrorObj,
  setLoading,
}) => {
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    getWeather(city)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          setWeatherData(null);
          setErrorObj({ ...errorObj, error: data.message });
          setLoading(false);
        }
        if (data.cod === 200) {
          setTimeout(() => {
            setErrorObj(null);
            setWeatherData({ ...data });
            setLoading(false);
          }, 1000);

        }
      })
      .catch((err) => console.log(err));

    // setCity("");
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="d-flex flex-column align-items-center weather-form  m-auto gap-3"
      >
        {/* <TextField
          label="City"
          onChange={handleChange}
          value={city}
        /> */}
        <input onChange={handleChange} value={city} placeholder="Enter City" />

        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
          // disabled={loading}
        >
          Search
        </Button>
      </form>
    </>
  );
};

export default GetWeather;
