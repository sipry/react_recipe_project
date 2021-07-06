import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  appbar: {
    background: 'white',
    opacity: "0.3",
  },
  appBarSolid: {
    background: "rgb(241, 239, 239)",
    webkiTransition: "background 2.5s",
    mozTransition: "background 2.5s",
    msTransition: "background 2.5s",
    oTransition: "background 2.5s",
    transition: "background 2.5s",
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    color: "black",
  },
  icon: {
    fontSize: '2rem',
    // eslint-disable-next-line
    color: "black",
  },
  root: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.4)), url(${process.env.PUBLIC_URL + '/images/bg.jpg'})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  title: {
    fontSize: "calc(30px + 2vmin)",

  },
  parg: {
    fontSize: "calc(10px + 2vmin)",

  },
  down: {
    color: 'white',
    fontSize: '4rem',
    opacity: "0.5",
  },
  favIcon: {
    fontSize: "13px",
  },
  
}));


export default function Header() {

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const [navBackground, setNavBackground] = useState('appbar')
  const navRef = React.useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100
      if (show) {
        setNavBackground('appBarSolid')
      } else {
        setNavBackground('appbar')
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes[navRef.current]}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            vegeterian
          </h1>
         
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 800 } : {})}>

        <div className={classes.root}>
          <p className={classes.parg}>Happy menu for</p>
          <h1 className={classes.title}>Vegeterian Recipes</h1>
          <Scroll to="Menupage" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.down} />
            </IconButton>
          </Scroll>

        </div>
      </Collapse>
    </div>
  );
}
