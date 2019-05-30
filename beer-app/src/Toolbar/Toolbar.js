import React from 'react';
import {Link} from 'react-router-dom';

const Toolbar= (props) =>(
    <header>
        <nav className = "Toolbar">
          <ul>
            <li><Link to ="/">Home</Link></li>  
          </ul>
        </nav>
        
      </header>
);


export default Toolbar;

