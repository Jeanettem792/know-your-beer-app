import * as React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Beer from './Beer/Beer.js';
class App extends Component{
  state ={
    beers:[
        {nae: 'Jean', age:'25' },
        {nae: 'Nat', age:'40' },
        {nae: 'Ben', age:'34' }
    ]
  }

  swithNaeHandler = () =>{
    console.log('Was done');
  }
  render() {return (
    <div className="App">
      <p>HI</p>
      <button onClick={this.swithNaeHandler}>lik</button>
      <Beer G={this.state.beers[0].nae}>PassedIn: hello</Beer>
    </div>
  );
  }
}



export default App;
