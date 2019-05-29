import React,{Component} from 'react';
import'./Favourites.css';
import axios from 'axios';
import Beer from '../Beer/Beer.js';
class Favourites extends Component{
    state={
        updatedBeers: null,
        faveritedBeer:null
    }


    /*componentDidUpdate(){
        if(this.props.id ){
    
            axios.get('https://api.punkapi.com/v2/beers/' + this.props.id)
            .then(response=>{
                //console.log(this.state.faveritedBeer);
                if(this.state.faveritedBeer&&this.state.faveritedBeer.id !== this.props.id){
                this.state.updatedBeers = this.state.faveritedBeer.slice()
                this.state.updatedBeers.push(response.data);
                this.setState({faveritedBeer: this.state.updatedBeers})
                console.log(this.state.faveritedBeer);}
                if(!this.state.faveritedBeer) {
                    this.setState({faveritedBeer: response.data})
                }
            });
        }
    }*/
        
    


render(){
    
        /*if(this.state.faveritedBeer){
            let beer = ( <div className="Favourites">

           <h1>{this.state.faveritedBeer.name}</h1>
            <button className="Delete">Delete</button></div>)};
        
   //let beer = this.state.faveritedBeer?this.state.faveritedBeer.map(beer=>{
    //return<Beer key={beer.id} 
    //name={beer.name}/>}) : null;

   // <p className="Favourites">Please Select Beer</p>;

       // if(this.state.faveritedBeer){
       //     beer=(
       // <div className="Favourites">

           // <h1>{this.state.faveritedBeer.name}</h1>
            //<button className="Delete">Delete</button>
        
       // </div>
       // );
            
    
    //if(this.props.id){
    //    beer = <p className="Favourites">loading...</p>;
    //}
    


*/


return(<div>
    
       
</div>) 
}}
export default Favourites;