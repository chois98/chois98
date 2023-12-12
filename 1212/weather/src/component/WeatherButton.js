import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  console.log(`cities : ${cities}`);
  return (
    <div>
      <Button onClick={() => handleCityChange("current")} variant="light">
        Currrent Location
      </Button>
      {cities.map((it) => (
        <Button onClick={() => setCity(it)} variant="light">
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
