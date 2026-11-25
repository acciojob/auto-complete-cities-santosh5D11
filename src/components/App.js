import React from "react";
import "./../styles/App.css";
import AutoComplete from "./AutoComplete";

const App = () => {
  const cities = [
    "Hyderabad",
    "Bangalore",
    "Mumbai",
    "Chennai",
    "Delhi",
    "Pune",
    "Kolkata",
    "Ahmedabad",
  ];

  return (
    <div>
      <p>Search cities of India :</p>
      <AutoComplete suggestion={cities} />
    </div>
  );
};

export default App;
