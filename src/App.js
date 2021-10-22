import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import SearchBar from './components/SearchBar';
import Container from '@material-ui/core/Container';
import Pdf from "react-to-pdf";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
buttonClass:{
  width :'100%',
  height : '5%',
}
});

function todayDate(){
  return(
    new Date().toLocaleDateString()  
  );
}

const fname = todayDate();

function App() {
  const ref = React.createRef();
  const classes = useStyles();

  return (
    <div className="cold">
      <TopNav />
      <Container maxWidth="sm" ref={ref}>
        <div className="middle" style={{ backgroundColor: '#000000', height: '100vh', opacity: 0.6 }} >
          <SearchBar />
          <Pdf targetRef={ref} filename={fname} style={{width:'100%', height:500}}>
        {({ toPdf }) => <button className={classes.buttonClass}  onClick={toPdf}>Download Report</button>}
      </Pdf> 
        </div> 

      </Container>
    </div>
  );
}

export default App;
