import React from 'react';
//import axios from 'axios';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';

import Feeling from '../Feeling/Feeling.jsx';

function App(){

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <ul>
      <p>How are you feeling today?</p>
    <li><a href="/#/feeling">Feeling</a></li>
    </ul>
      <HashRouter>
        <Route path="/feeling">
        <Feeling/>
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
