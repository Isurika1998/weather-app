import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import weathericon from '../assets/weathericon.gif';
import AboutPopover from './About';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  header: {
    backgroundColor: '#000000',
    opacity: 0.8,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  topbar:{
    alignItems: 'Center',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handlePopoverOpen = (event) => {

  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.topbar}>
        <IconButton color="inherit" aria-label="menu" margin="0" padding="0">            
            <img src={weathericon} style={{width:'10%'}}></img>
        </IconButton>
          <Typography variant="h6" className={classes.title} alignItems="center">
            WeatherApp
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="menu" >            
            <AboutPopover/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
