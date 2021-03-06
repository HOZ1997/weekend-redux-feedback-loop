import React from 'react';
//import axios from 'axios';
import './App.css';
import {Route, HashRouter as Router} from 'react-router-dom';

import Feeling from '../Feeling/Feeling.jsx';
import Home from '../Home/Home.jsx';
import Supported from '../Supported/Supported.jsx';
import Understand from '../Understand/Understand.jsx';
import Comment from '../Comment/Comment.jsx';
import Review from '../Review/Review.jsx';
import Feedback from '../Feedback/Feedback.jsx'



function App(){
 
  
  
  return (


    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        </header>
 
      {/* <ul>
    
      <li><a href="/#/feeling">Feeling</a></li>
      <li><a href="/#/understand">Understand</a></li>
      <li><a href="/#/supported">Supported</a></li>
      <li><a href="/#/comment">Comment</a></li>
      <li><a href="/#/review">Review</a></li>
      <li><a href="/#/feedback">Feedback</a></li>
    </ul> */}
    <Router>
        <Route path="/" exact>
        <Feeling/>
        </Route>
        <Route path="/feeling">
        </Route>
        <Route path="/understand">
          <Understand/>
        </Route>
        <Route path="/supported">
          <Supported/>
        </Route>
        <Route path="/comment">
          <Comment/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
        <Route path="/feedback">
          <Feedback/>
          </Route>
      </Router>


    </div>
  );
}

export default App;