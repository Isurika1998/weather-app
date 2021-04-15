import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  search: {
      margin: theme.spacing(1),
      textAlign: 'center',
  },
  searchField: {
    backgroundColor: '#ffffff',
    opacity: 0.7,
    marginTop: "2%",
    border: 'none',
    outline: 'none',
    borderRadius: '0px 0px 20px 20px', 
    fontSize: '25px',
    fontWeight: 'bold'
  },

}));

const api = {
  key: "7b48f3477845e9fd382ede953eff6ade",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function BasicTextFields() {
  const classes = useStyles();

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  let date = String(new window.Date());
  date = date.slice(3,15);

  return (
    <div>
      <div className={classes.search}>
      <TextField
        className={classes.searchField}
        InputLabelProps={{style: { color: '#000', fontSize: '20px', paddingLeft: '20px'  }}} 
        fullWidth id="filled-basic" label="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>
    {(typeof weather.main != "undefined") ? (
      <div>
        <Typography className="location" variant="h4">{weather.name}, {weather.sys.country}</Typography>
        <Typography className="date" variant="h5">{date}</Typography>
        <div className="weather-box">
          <Typography className="temp">{Math.round(weather.main.temp)} °C</Typography>
          <Typography className="weather">Sunny</Typography>
        </div>
      </div>
    ) : ('')}
  </div>
  );
}