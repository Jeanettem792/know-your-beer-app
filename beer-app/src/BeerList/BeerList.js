import React, {Component} from 'react';
import Beer from '../Beer/Beer.js';
import axios from 'axios';
import {Link,NavLink,withRouter} from 'react-router-dom';
import Details from '../Details/Details';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FavouriteBeer from '../FavouiteBeer/FavouriteBeer';



class BeerList extends Component{
    state = {
        beerSelected: [],
        selectedBeerId: null
        
      };

      
    
    addToFavourite(beer,index){
        console.log("before");
        const beers = this.state.beerSelected.slice();
        console.log(beers.data);
        if(beer.favourited){
          console.log("if");
          console.log(index);
          console.log("beer key" + beer.key);
         beers.splice(beers.findIndex(bee => bee.id === beer.id),1);
         beer.buttonDes = "add";
         console.log(beers.data);
            this.setState({beerSelected:beers});}
          else{
            console.log("else");
            beers.push(beer);
            beer.buttonDes = "remove";
          this.setState({beerSelected: beers});
          console.log(this.state.beerSelected);
        }
          
          beer.favourited = !beer.favourited;
      }
      postClicked=(id) =>{
          console.log("clicked" + id);
        this.setState({selectedBeerId: id});
      }
    render(){
      const useStyles = makeStyles(theme => ({
        cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
        },
        card: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
 
        },
      }));
        const beers =this.props.beers.map((beer,index)=>{
          console.log(beer.image_url);
          return( 
            <Grid item key={beer.id} xs={12} sm={6} md={4}>
        <Beer
            name={beer.name}
            click = {()=>this.addToFavourite(beer,beer.id)}
            favourited={beer.favourited}
            clicked={()=>this.postClicked(beer.id)}
            buttonDes={beer.buttonDes}
            image={beer.image_url}
            useStyles={useStyles}
        > <Link to={'/details/' + beer.id} key={beer.key} >Details</Link></Beer>
        </Grid>
        );
    }
    );
    
            const beersSelected =this.state.beerSelected.map((beer,index)=>{
              console.log("from beerselected" +this.state.beerSelected);
              return <FavouriteBeer
              
              name={beer.name}
              favourited={beer.favourited}
              click = {()=>this.addToFavourite(beer,beer.id)}
              buttonDes={beer.buttonDes}
              >remove from Fav</FavouriteBeer>});

        return (
             <div>
               
                <div className="favsBar">
                  Favourites
                {beersSelected}
               </div>
              
              <Container className="cardGrid" maxWidth="md">
              <Grid container spacing={4}>
                {beers}
                </Grid>
                </Container> 
             </div>
            );
    }


}


export default withRouter(BeerList);
