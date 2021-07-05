import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    margin:"20px",
  },

});
// eslint-disable-next-line
export default function MenuCard({recipe}) {
  const classes = useStyles();

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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
