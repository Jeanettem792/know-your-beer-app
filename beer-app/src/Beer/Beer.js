import React from 'react';
import './Beer.css';
const beer = (props) =>(
<div className="Beer" onClick={props.clicked}>
    
    <h1>{props.name}</h1>
    <button onClick={props.click}>{props.children}</button>
   </div>
   
);


export default beer;