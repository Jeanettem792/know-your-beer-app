import * as React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Beer from './Beer/Beer.js';
import axios from 'axios';
import Favourites from './Favourites/Favourites.js';
import BeerList from './BeerList/BeerList';
import FavouriteBeer from './FavouiteBeer/FavouriteBeer.js';
import {BrowserRouter} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import Details from './Details/Details';
import Toolbar from './Toolbar/Toolbar';
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
      console.log(response);
    });}
  }   

 render() {
   
   console.log(this.props);
   
  
  return(
    
    <div className="app">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Toolbar/>
      <Route path="/" exact render={(props) =><BeerList {...props} beers={this.state.beers}/>}/> 
     <div>
      <Route path="/details/:id" exact component={Details}/>
      </div>
        
      
      
    </div>
 
  );
  }
}

export default App;
