import React,{Component} from 'react';
import  Beer from '../Beer/Beer';
import axios from 'axios';
class Details extends Component{
state ={
    fullDetails:null

}
componentDidUpdate(){
    console.log("beer" + this.props.id)
    console.log(this.state.fullDetails);
    if(this.props.id){
        if(!this.state.fullDetails ||(this.state.fullDetails && this.state.fullDetails.id !== this.props.id)){
axios.get('https://api.punkapi.com/v2/beers/' + this.props.id)
    .then(response => {
        this.setState({fullDetails: response.data[0]});
        console.log(this.state.fullDetails.id);
    });
        }
}
}

render(){
    let beer = null;
    if (this.state.fullDetails){
        console.log("beer" + this.props.id);
        beer = (
            <div>
            {this.state.fullDetails.name}
            {this.state.fullDetails.tagline}
            {this.state.fullDetails.first_brewed}
            {this.state.fullDetails.description}
            {this.state.fullDetails.ph}
            
            
            
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