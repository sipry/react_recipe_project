import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import Menu from './components/Menu';



const useStyles = makeStyles((theme) => ({}));
export default function App() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <Menu/>
     
    </div>
  );
  
}