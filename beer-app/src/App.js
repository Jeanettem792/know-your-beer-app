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
import Details from './Details/Details'
class App extends Component{
  
   
  
  //https://api.punkapi.com/v2/beers
  //useState returns 2 arrays 1 the state and 2 a function that allows you to update the equals
  

     /*swithNaeHandler = (newName) => {
      console.log('Was done');
      
        this.setState({
      beers:[
        {name: newName, age:'25' },
        {name: 'Nat', age:'40' },
        {name: 'Ben', age:'34' }
    ]}) 
  
    }

    nameChangedHandler =(event,id) =>{
      const beerIndex =this.state.beers.findIndex(p =>{
        return p.id === id;
      })
      const beer ={
        ...this.state.beers[beerIndex]
      } 

      beer.name = event.target.value;
      const beers = [...this.state.beers];
      beers[beerIndex]=beer;
      this.setState({
        beers: [beers]
      })
    }
    toggleBeer=()=>{
      const doesshow = this.state.showBeer;
      this.setState({showBeer:!doesshow})
    }
    deletePerson=(index)=>{
      const beers = [...this.state.beers]//this.state.beers.slice();
      beers.splice(index,1);
      this.setState({beers: beers});
    }*/
    

    

 render() {
   
       //= <BeerList clicked = {this.addToFavourite(beer)} beer = {this.state.beers}/>
       
   /*const style={
     backgroundColor: 'white',
    font: 'inherit',
     border: '1px solid blue',
     padding: '8px',
     cursor: 'pointer'
   };
  
   
   if(this.state.showBeer){
    beers=(
<div>
  {this.state.beers.map((beer,index) =>{
    return <Beer click={()=>this.deletePerson(index)} 
    id={beer.id} 
    />
   //changed={(event)=>this.nameChangedHandler(event,beer.id)}/>
  })}
       </div>
    );
    
 <button style= {style}onClick={this.toggleBeer}>CLICK ME!</button>
   }*/
  return(
    
    <div className="app">
      <header>
        <nav className = "Fav">
          <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to="/details">details</Link></li>
            
          </ul>
        </nav>
      </header>
      <Route path="/" exact component={BeerList} />
      
      
      <Route path="/details:id" exact component={Details}/>
        
      
      
    </div>
 
  );
  }
}

/*


state ={
  beers:[
      {nae: 'Jean', age:'25' },
      {nae: 'Nat', age:'40' },
      {nae: 'Ben', age:'34' }
  ],
  otherState: 'other state'
}*/



export default App;
