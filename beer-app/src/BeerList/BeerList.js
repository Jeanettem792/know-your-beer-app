import React, {Component} from 'react';
import Beer from '../Beer/Beer.js';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Details from '../Details/Details';
class BeerList extends Component{
    state = {
        beers:[],
        beerSelected: [],
        selectedBeerId: null
        
      };
    componentDidMount(){
        axios.get('https://api.punkapi.com/v2/beers')
        .then(response =>{
          const beers = response.data.slice();
       const updatedBeer = beers.map( beer =>{
           return{
             ...beer,
             favourited:false
           }
         });
         this.setState({beers: updatedBeer});
          console.log(response);
        });
      }
    addToFavourite(beer,index){
        console.log("before");
        const beers = this.state.beerSelected.slice();
        console.log(beers.data);
        if(beer.favourited){
          console.log("if");
          console.log(index);
          console.log("beer key" + beer.key);
         beers.splice(beers.findIndex(bee => bee.id === beer.id),1);
         
         console.log(beers.data);
            this.setState({beerSelected:beers});}
          else{
            console.log("else");
            beers.push(beer);
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
        const beers =this.state.beers.map((beer,index)=>{
     return( 
        <Beer
            key={beer.key} 
            name={beer.name}
            click = {()=>this.addToFavourite(beer,beer.id)}
            favourited={beer.favourited}
            clicked={()=>this.postClicked(beer.id)}
        >add to Favs</Beer>
        
        );
    }
    );
    
            const beersSelected =this.state.beerSelected.map((beer,index)=>{
              console.log("from beerselected" +this.state.beerSelected);
              return <Beer
              
              name={beer.name}
              favourited={beer.favourited}
              clicked = {()=>this.addToFavourite(beer,beer.id)}
              >remove from Fav</Beer>});

        return (
             <div>
                 
                {beers}
                <Details id={this.state.selectedBeerId}/>
                    <div className="Fav">
                     {beersSelected}
                    </div>
             </div>
            );
    }


}



/*const beerList = (props) => 
props.beer.map((beers,index)=>{
    return <Beer
    key={beers.id} 
    name={beers.name}
    clicked = {props.clicked}
    />
});*/

export default BeerList;
