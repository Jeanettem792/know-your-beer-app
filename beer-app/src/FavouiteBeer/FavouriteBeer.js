import React from 'react';
import Beer from  '../Beer/Beer.js';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardContent, CardActionArea } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './FavouriteBeer.css';
const FavouriteBeer = (props) =>(

<div >
    <h5>{props.name}</h5>
    <Button size="small" color="primary" onClick={props.click}>{props.buttonDes}</Button>
</div>
   

   
);


export default FavouriteBeer;