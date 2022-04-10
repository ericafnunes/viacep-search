import useStyles from './style';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




function Cardcep({cep,logradouro,complemento,bairro,localidade,uf }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.titulo}
        title={cep}
      />
      <CardContent>
          <Typography variant="body2" component="li" className={classes.marginRight}>
          <ul className={classes.direction}>
            <li>{logradouro}</li>
            <li>{complemento}</li>
            <li>{bairro}</li>
            <li>{uf}</li>
          </ul>
          </Typography>
      </CardContent>
    </Card>
  );
}

export default Cardcep;