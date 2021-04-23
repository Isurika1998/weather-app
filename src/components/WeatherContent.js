import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function WeatherContent(props) {

  let date = String(new window.Date());
  date = date.slice(3,15);
  //await fetch('http://openweathermap.org/img/w/' + iconName + '.png')

  return (
    <React.Fragment>
    {(typeof props.weatherInfo.main != "undefined") ? (
      <div>
        <Typography className="location" variant="h4">{props.weatherInfo.name}, {props.weatherInfo.sys.country}</Typography>
        <Typography className="date" variant="h5">{date}</Typography>
        <div className="weather-box">
          <Typography className="temp">{Math.round(props.weatherInfo.main.temp)} °C</Typography>
          <Typography className="weather">{props.weatherInfo.weather[0].description}</Typography>
          <div className="weather-icon"><img id="wicon" src={'http://openweathermap.org/img/wn/'+props.weatherInfo.weather[0].icon+'@2x.png'} alt="Weather icon" /></div>
        </div>
      </div>
    ) : ('')}
  </React.Fragment>
  );
}