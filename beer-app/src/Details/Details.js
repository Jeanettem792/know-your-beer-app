import React,{Component} from 'react';
import  Beer from '../Beer/Beer';
import axios from 'axios';
import './Details.css';
class Details extends Component{
state ={
    fullDetails:null
}
componentDidMount(){
    if(this.props.match.params.id){
        if(!this.state.fullDetails ||(this.state.fullDetails && this.state.fullDetails.id !== this.props.match.params.id)){
            axios.get('https://api.punkapi.com/v2/beers/' + this.props.match.params.id)
        .then(response => {
            this.setState({fullDetails: response.data[0]});
       
        });
        }
}
}


render(){
    const style={
        display: 'block',
    margin: 'auto',
    align: 'center',
      }
    let beer = null;
    if (this.state.fullDetails){
        console.log("beer" + this.props.id);
        beer = (
            <div>
                <h1 className="BeerCenter">{this.state.fullDetails.name}</h1>
                <img alt="Beer bottle"src={this.state.fullDetails.image_url}/>
            
                <h2 className="BeerCenter">{this.state.fullDetails.tagline}</h2>
                <ul>
                    <li>
                        <h3>Brewed:</h3>  
                        {this.state.fullDetails.first_brewed}
                    </li>
                    <li>
                        <h3>Description:</h3>
                        {this.state.fullDetails.description}
                    </li>
                    <li>
                        <h3>ph:</h3>
                        {this.state.fullDetails.ph}
                    </li>
            
                 </ul>
            </div>
        );
    }
     
    return(
        <div>
            {beer}
        </div>
    );



}


}


export default Details;