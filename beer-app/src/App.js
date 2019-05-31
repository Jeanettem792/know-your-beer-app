import * as React from 'react';
import {Component} from 'react';
import './App.css';
import Beer from './Beer/Beer.js';
import axios from 'axios';
import BeerList from './BeerList/BeerList';
import FavouriteBeer from './FavouiteBeer/FavouriteBeer.js';
import {Route, Link} from 'react-router-dom';
import Details from './Details/Details';
import Toolbar from './Toolbar/Toolbar';
import Grid from '@material-ui/core/Grid';

class App extends Component{
  state={  
      beers:[],
      beerSelected: [],
      selectedBeerId: null
  };
  
  componentDidMount(){
    if(this.state.beers.length<1){
        axios.get('https://api.punkapi.com/v2/beers')
        .then(response =>{
      const beers = response.data.slice();
      const updatedBeer = beers.map( beer =>{
        return{
         ...beer,
         favourited:false,
         buttonDes: "add"
        }
      });
     this.setState({beers: updatedBeer});
    });
  }
}   

  addToFavourite(beer){
    const beers = this.state.beerSelected.slice();
      if(beer.favourited){
        beers.splice(beers.findIndex(bee => bee.id === beer.id),1);
        beer.buttonDes = "add";
        this.setState({beerSelected:beers});
      }
      else{
          beers.push(beer);
          beer.buttonDes = "remove";
          this.setState({beerSelected: beers});
      } 
        beer.favourited = !beer.favourited;
  }
  

 render() {
   const beersSelected =this.state.beerSelected.map((beer)=>{
    return <FavouriteBeer
              key={beer.id}
              name={beer.name}
              favourited={beer.favourited}
              click = {()=>this.addToFavourite(beer,beer.id)}
              buttonDes={beer.buttonDes}>remove from Fav</FavouriteBeer>
            });
  

    const beers =this.state.beers.map((beer)=>{
      return( 
        <Grid item key={beer.id} xs={12} sm={6} md={4} key={beer.id}>
          <Beer
            name={beer.name}
            click = {()=>this.addToFavourite(beer,beer.id)}
            favourited={beer.favourited}
            buttonDes={beer.buttonDes}
            image={beer.image_url}> 
              <Link style={{ textDecoration: 'none', color:'black'}} to={'/details/' + beer.id} key={beer.key} >Details</Link>
          </Beer>
    </Grid>
    );
}
);
  return(
    <div className="app">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Toolbar beerSelected={beersSelected}/>
      <Route path="/" exact render={(props) =><BeerList {...props} beers={beers}/>}/> 
    <div>
      <Route path="/details/:id" exact component={Details}/>
    </div> 
    </div>
  );
  }
}

export default App;
