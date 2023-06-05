import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [cityName, setCityName] = useState("paris");
  const [inputName, setInputName] = useState("");
  const [cityData, setCityData] = useState({});
  const [loading, setLoading] = useState(true);
  const [degree, setDegree] = useState("K");

  const cityNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const enterDataHandler = (event) => {
    if (event.key === "Enter") {
      setCityName(event.target.value);
      setInputName("");
    }
  };

  const celsiuseHandler = (event) => {
    /*  setDegree((prevstate) => {
      console.log(prevstate);
    }); */
    console.log(event);
  };

  useEffect(() => {
    const requestData = async () => {
      try {
        //setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=34bc1753fe56de77416927cf2acbba18`
        );
        setCityData(response.data);
        setLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };
    requestData();
  }, [cityName]);

  console.log(cityData);
  return (
    <div className="app">
      {!loading && (
        <>
          <div className="input">
            <input
              type="text"
              name="city"
              onChange={cityNameHandler}
              value={inputName}
              onKeyDown={enterDataHandler}
            />
            <button onClick={celsiuseHandler}>{degree}</button>
          </div>
          <h1 className="city">
            {cityData.name} , {cityData.sys.country}
          </h1>
          <div className="group">
            <img
              src={`https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`}
              alt="icons"
            />
            <h1>{cityData.weather[0].main}</h1>
          </div>

          <div className="temperature">
            <h1>{cityData.main.temp}</h1>
          </div>

          <div className="box-container">
            <div className="box">
              <p>Humanidity</p>
              <h1>12%</h1>
            </div>

            <div className="box">
              <p>Wind</p>
              <h1>{cityData.wind.speed} km/h</h1>
            </div>

            <div className="box">
              <p>Max Temperature</p>
              <h1>{cityData.main.temp_max} </h1>
            </div>

            <div className="box">
              <p>Min Temperature</p>
              <h1>{cityData.main.temp_min} </h1>
            </div>

            <div className="box">
              <p>Feels Like</p>
              <h1>{cityData.main.feels_like} </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
