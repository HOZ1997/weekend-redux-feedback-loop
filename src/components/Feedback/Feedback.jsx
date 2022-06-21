
import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';   

let feedbacks =[];

function Feedback(){
    const dispatch = useDispatch();
    const history =useHistory();
    const [feedbacks, setFeedback] = useState('');
   
  
    const changeFeedback = (event) => {
      console.log (feedbacks)
      setFeeling(event.target.value)
    }
  
    const addingFeeback = () =>{
      dispatch({type: 'SEND_FEEDBACK', payload: feedbacks})
    history.push ('/')
    }
  
    return (
      <div>
        <div>
        <h1>Feedback!</h1>
        <h2>Thank you!</h2>
        
             <button onClick={addingFeeback }>Leave New Feedback</button>
          </div>
          </div>
    );
  }





export default Feedback;