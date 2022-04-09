import useStyles from './style';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




function Cardcep({result}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="CEP" className={classes.CardHeader}
      />
    </Card>
  );
}

export default Cardcep;