import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";

const Fetch = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      {countries.map((country, index) => (
        <Card country={country} key={index}></Card>
      ))}
    </div>
  );
};

export default Fetch;
