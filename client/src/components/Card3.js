import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" style={{color: "darkgreen"}}>
            <b>Total Recovered</b>
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{color: "darkgreen"}}>
            <b>{props.recovered}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}