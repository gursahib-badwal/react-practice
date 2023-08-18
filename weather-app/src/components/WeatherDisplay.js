export default function WeatherDisplay(props) {
  return (
    <div>
      <h1 className="text-2xl mt-5 ml-5">
        Weather Report : {props.data.location.name} ({props.data.location.region},{" "}
        {props.data.location.country})
      </h1>
      <h1 className="text-sm font-semibold ml-5">
        Longitude: {props.data.location.lon}, Latitude: {props.data.location.lat}
      </h1>

      <div className="flex items-center ml-5">
        <h3 className="text-xl mt-2">
          Weather Condition: {props.data.current.condition.text}
        </h3>
        <img src={`https:${props.data.current.condition.icon}`} className="wd-24 h-24" />
      </div>
      <h6 className="text-2xl ml-10">Temperature</h6>
      <ul className="ml-5">
        <li>Temperature (&deg;C): {props.data.current.temp_c}</li>
        <li>Temperature (&deg;F): {props.data.current.temp_f}</li>
        <li>Wind Speed (kph): {props.data.current.wind_kph}</li>
        <li>Wind Speed (mph): {props.data.current.wind_mph}</li>
        <li>
          Wind Direction : {props.data.current.wind_dir} ({props.data.current.wind_degree}
          &deg;)
        </li>
      </ul>
      <p className="text-xs">Last Updated at {props.data.current.last_updated}.</p>
    </div>
  );
}
