import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  	root: {
		height: '100%'
	},
	rootBotton: {
		height: '100%',
		display: 'inline-flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
    	justifyContent: 'flex-start'
	}
}));


const OneCard = (props) => {
  const classes = useStyles();
  let title = props.title ? props.title : "";

  if(!props.onClick)
    return null;

  return (
    <Card data-test="cardContainer" onClick={props.onClick} className={classes.root}>
      <CardActionArea className={classes.rootBotton}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

OneCard.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default OneCard;