import React, { useState } from "react";
import "/src/styles.css";

const date = new Date();

function Center(props) {
  const [city, setCity] = useState("Tel Aviv");
  const [displayCity, setDisplaCity] = useState(false);

  const handleClick = () => {
    setDisplaCity(true);
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <div className="location">
        <p>
          Find out the Weather in every city in the world{" "}
          <span role="img" aria-label="Globe">
            🌎
          </span>
        </p>
        <label htmlFor="City">City:</label>
        <input
          type="text"
          id="City"
          name="City"
          placeholder="Search Weather by city"
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleClick}>
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div className="main-info">
        <p>
          <u>Current Weather in</u> <b>{city}</b>:
        </p>
        <p>{date.toLocaleDateString()}</p>
        <h1> {props.temp} </h1>
        <img src={props.img} alt="current temp status" />
      </div>
    </div>
  );
}

export default Center;
