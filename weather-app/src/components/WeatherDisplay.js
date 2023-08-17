export default function WeatherDisplay(props) {
  return (
    <div>
      <h1>Weather Display</h1>
      <h6>{props.data.location.country}</h6>
    </div>
  );
}
