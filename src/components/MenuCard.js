import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {IconButton} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin:"20px",
  },

});
// eslint-disable-next-line
export default function MenuCard({recipe}) {
  const classes = useStyles();

  const [ isFav, setFav ]=useState(false);
  

  function handleClick () 
  {
    setFav(!isFav);
    
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="veterian recipe"
          height="300"
          image={recipe.image}
          title="veterian recipe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          {recipe.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {recipe.description}
          </Typography>
          <IconButton onClick={() => handleClick()} color={isFav?'secondary': 'primary'} className={classes.favIcon} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
