import React from 'react';
import './Beer.css'
import Card from '@material-ui/core/Card';
import { CardContent} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const beer = (props) =>(
    
<Grid>
<Card >
<div>              
     <img  alt="Beer bottle" className="BeerImg" align="middle" src={props.image}></img>           
    <CardContent>
        <h5 align="middle">{props.name}</h5>
    </CardContent>
    <section className="BeerCenter">
        <button className="BeerButton" size="small" color="primary"><div>{props.children}</div></button>
        <button  className="BeerButton" size="small" color="primary" onClick={props.click}>{props.buttonDes}</button>
    </section>
</div>
</Card>
</Grid>
);


export default beer;