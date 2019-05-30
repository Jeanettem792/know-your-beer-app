import React from 'react';
import './Beer.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardContent, CardActionArea } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const beer = (props) =>(
    
    <Grid>
<Card >
<div  onClick={props.clicked}>
<CardMedia className={props.useStyles.cardMedia}>
                   
     <img className="BeerImg" align="middle" src={props.image}></img>
                   
                  
   </CardMedia> 

<CardContent className={props.useStyles.cardContent}>
<Typography>
    <h5>{props.name}</h5>
    </Typography>
    </CardContent>
    <CardActionArea>
    <Button size="small" color="primary"><div>{props.children}</div></Button>
   
    <Button size="small" color="primary" onClick={props.click}>{props.buttonDes}</Button>
    </CardActionArea>
   </div>
   </Card>
   </Grid>
);


export default beer;