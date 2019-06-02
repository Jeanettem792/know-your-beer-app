import * as React from 'react';
import {Component} from 'react';
import './App.css';
import Beer from './Beer/Beer.js';
import BeerList from './BeerList/BeerList';
import FavouriteBeer from './FavouiteBeer/FavouriteBeer.js';
import {Route, Link} from 'react-router-dom';
import Details from './Details/Details';
import Toolbar from './Toolbar/Toolbar';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import * as actions from './store/actions/actions';
class App extends Component{
  componentDidMount(){
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
  };
};

  const mapDispatchToProps = dispatch =>{
    
    return{
      onGetBeers:()=>dispatch(actions.getBeers()),
      onAddFavourites: (beer)=>dispatch(actions.addFavourites(beer))
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(App);
