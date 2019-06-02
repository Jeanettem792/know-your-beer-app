import React from 'react';
import './FavouriteBeer.css';
const FavouriteBeer = (props) =>(
  <li className="Favli">   
    <button className="ButtonFav" onClick={props.click}>
       <p>{props.name}<br/>{props.buttonDes}</p>
    </button>
   </li>
  
);


export default FavouriteBeer;