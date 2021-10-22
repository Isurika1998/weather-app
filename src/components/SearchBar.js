import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import WeatherContent from './WeatherContent';

const useStyles = makeStyles((theme) => ({
  search: {
      margin: theme.spacing(1),
      textAlign: 'center',
  },
  searchField: {
    backgroundColor: '#ffffff',
    opacity: 0.7,
    marginTop: "2%",
    width:'100%',
    border: 'none',
    outline: 'none',
    borderRadius: '20px 20px 20px 20px', 
    fontSize: '25px',
    fontWeight: 'bold',
    "&:focus": {
      outline: 'none',
  }
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

  return (
    <React.Fragment>
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
    <WeatherContent weatherInfo={weather} />
  </React.Fragment>
  );
}