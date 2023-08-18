import React from "react";
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

export default function WeatherForm() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const API_URL = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${process.env.REACT_APP_API_KEY}`;
  // useEffect(() => {
  //   async function fetchInitialData() {
  //     try {
  //       const response = await fetch(
  //         `https://api.weatherapi.com/v1/current.json?q=surrey&key=${process.env.REACT_APP_API_KEY}`
  //       );
  //       if (response.ok) {
  //         const response_json = await response.json();
  //         setData(response_json);
  //         empty = false;
  //         console.log(response_json);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchInitialData();
  // }, []);

  async function handleSubmit() {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const response_json = await response.json();
        setData(response_json);
        setLoading(false);
        console.log(response_json);
      } else {
        const error_text = await response.text();
        alert("Error: " + error_text);
        //This else statement is particularly for the response from the API
      }
    } catch (error) {
      console.log(error);
      //This catch statement is for the whole process of fetching, converting, and setting the data
    }
  }

  return (
    <div>
      {/* <h1>WeatherForm here!</h1> */}
      <label className="label" htmlFor="city">
        City:{" "}
      </label>
      <input
        className="search"
        type="text"
        name="city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
      {/* {loading && <h1>Loading...</h1>} */}
      {/* Using ternary operator instead of dealing with the two loading states separately */}
      {loading ? <h1>Loading...</h1> : <WeatherDisplay data={data} />}
    </div>
  );
}

//Here the importance of the loading state is that the fetching of data from the API
// and that whole process is async, due to which there can be a case that the child component
// weather display is rendered before the data is fetched from the API, and hence the data passed
// to the child component is undefined. Hence we need to make sure that the data is fetched before
// the child component is rendered.
