import React, { useEffect, useState } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'white',
    opacity: "0.3",
  },
  appBarSolid: {
    background: 'white',
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
    color:"black",
  },
  icon: {
    fontSize: '2rem',
    // eslint-disable-next-line
    color:"black",
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
  search: {
    
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
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
  }, [])


  return (
    <div className={classes.root} id="header">
      <AppBar className={classes[navRef.current]}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            vegeterian
          </h1>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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