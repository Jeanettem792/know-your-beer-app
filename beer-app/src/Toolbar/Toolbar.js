import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const Toolbar= (props) =>(
    <header>
        <nav className = "Toolbar">
          <ul>
            <li><Link to ="/">Home</Link></li> 
            {props.beerSelected} 
          </ul>
          
        </nav>
        
      </header>

);


export default Toolbar;

