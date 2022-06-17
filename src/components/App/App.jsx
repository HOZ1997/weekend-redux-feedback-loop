import React from 'react';
//import axios from 'axios';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';

import Feeling from '../Feeling/Feeling.jsx';
//import Supported from '../Supported/Supported.jsx';
import { useSelector } from 'react-redux';

function App(){
  const gotFeeling = useSelector( store => store.sendFeeling );
  //const gotSupported = useSelector( store => store.sendSupported );
  
  
  return (


    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        </header>
 
      <ul>
      <h1>How are you feeling today?</h1>
    <li><a href="/#/feeling">{ gotFeeling }</a></li>
    <p> Feeling?: { gotFeeling} </p>
    </ul>
      <HashRouter>
        <Route path="/feeling">
        <Feeling/>
        </Route>
        {/* <Route path="/supported">
        <Supported/>
        </Route>  */}
      </HashRouter>
    </div>
  );
}

export default App;