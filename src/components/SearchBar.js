import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
    <form className={classes.search} noValidate autoComplete="off">
      <TextField className={classes.searchField} 
      InputLabelProps={{style: { color: '#000', fontSize: '20px'  }}} 
      fullWidth id="filled-basic" label="Search..." variant="filled" />
    </form>
  </div>
  );
}