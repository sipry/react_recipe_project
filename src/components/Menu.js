import { makeStyles } from '@material-ui/core/styles';
import MenuCard from './MenuCard';
import React, { useEffect, useState } from 'react';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles((theme) => ({
    root: {
        minheight: "100vh",
        margin: "30px;",

    },
    columuns: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column"
        }
    }
}));

export default function Menu() {
    const [recipes, setRecepies] = useState([]);
    const fetchRecipes = () => {
        fetch('http://127.0.0.1:8000/recipes/').then(response => {
            return response.json();
        }).then(data => {

            setRecepies(data);
        });
    }
    useEffect(() => {
        fetchRecipes();
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root} id="Menupage">

            <GridList className={classes.columuns} cols={3}>
                {
                    recipes.map((recipe) => (

                        <MenuCard recipe={recipe}/>
                    ))
                }
           </GridList>


        </div>
    );
}
