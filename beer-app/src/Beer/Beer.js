import React from 'react';
import './Beer.css';
const beer = (props) =>{
return (
<div className="Beer">
    <h1>{props.name}</h1>
    <p onClick={props.click}>Beer is {props.name}</p>
   </div>);
};

export default beer;