import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Details from "./Details";
import Center from "./Center";

function Weather() {
  return (
    <div>
      <Header />
      <div className="container">
        <Center
          temp="23 C"
          img="https://cdn-icons-png.flaticon.com/128/1163/1163661.png"
        />
        <Details
          feelsLike="4.79"
          minTemp="6.16"
          maxTemp="10.11"
          pressure="1004"
          humidity="95"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Weather;
