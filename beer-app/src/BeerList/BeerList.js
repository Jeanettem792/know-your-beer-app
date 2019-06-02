import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const BeerList =(props)=>(
             <div> 
              <Container className="cardGrid" maxWidth="md">
              <Grid container spacing={4}>
                {props.beers}
                </Grid>
                </Container> 
             </div>         
    );



export default BeerList;
