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
import {connect} from 'react-redux';
import{getBeers, addFavourites} from './store/actions/actions';
import * as actions from './store/actions/actions';
class App extends Component{
  state={  
      
      beerSelected: [],
      selectedBeerId: null
  };
  
  componentDidMount(){
    
   this.loadBeers();

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
  
 loadBeers(){
    this.props.onGetBeers();
 }
 render() {
   const beersSelected =this.props.beersSelected && this.props.beersSelected.length>0?this.props.beersSelected.map((beer)=>{
    return <FavouriteBeer
              key={beer.id}
              name={beer.name}
              favourited={beer.favourited}
              click = {()=>this.props.onAddFavourites(beer)}
              buttonDes={beer.buttonDes}>remove from Fav</FavouriteBeer>
            }):null;
  
            
    const beers =this.props.beers.length>0?this.props.beers.map((beer)=>{
      
      return( 
        
        <Grid item key={beer.id} xs={12} sm={6} md={4}>
          <Beer
            name={beer.name}
            click = {()=>this.props.onAddFavourites(beer)}
            favourited={beer.favourited}
            buttonDes={beer.buttonDes}
            image={beer.image_url}> 
              <Link style={{ textDecoration: 'none', color:'black'}} to={'/details/' + beer.id} key={beer.key} >Details</Link>
          </Beer>
          
    </Grid>
    );
}
):null;
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

const mapStateToProps = state => {
  return{
      beersSelected: state.beersSelected,
      beers: state.beers,
      beer: state.beer
  };
};

  const mapDispatchToProps = dispatch =>{
    
    return{
      onGetBeers:()=>dispatch(getBeers()),
      onAddFavourites: (beer)=>dispatch(actions.addFavourites(beer))
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(App);
