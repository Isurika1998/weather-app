import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import SearchBar from './components/SearchBar';
import Container from '@material-ui/core/Container';



function App() {

  return (
    <div className="cold">
      <TopNav />
      <Container maxWidth="sm">
        <div className="middle" style={{ backgroundColor: '#000000', height: '100vh', opacity: 0.5 }} >
          <SearchBar />
          
        </div> 
      </Container>
    </div>
  );
}

export default App;
