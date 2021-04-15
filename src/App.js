import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import SearchBar from './components/SearchBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const api = {
  key: "e3d4b87722e311f852f0be32a82f0d90",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  let date = String(new window.Date());
  date = date.slice(3,15);

  return (
    <div className="app">
      <TopNav />
      <Container maxWidth="sm">
        <div className="middle" style={{ backgroundColor: '#000000', height: '100vh', opacity: 0.5 }} >
          <SearchBar />
          <Typography className="location" color="primary" variant="h5">Bellapitiya, Sri Lanka</Typography>
          <Typography className="date" color="primary" variant="h5">{date}</Typography>
        </div> 
      </Container>
    </div>
  );
}

export default App;
