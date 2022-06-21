import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom'; 


function Review() {
    const gotFeeling = useSelector( store => store.sendFeeling );
    const gotUnderstand = useSelector( store => store.sendUnderstand );
    const gotSupported = useSelector( store => store.sendSupported );
    const gotComment = useSelector( store => store.sendComment );
    
    const history = useHistory();


    const sendFeedback = ()=>{
        console.log ('send feedback');
    let addFeedback = {
        feeling: gotFeeling,
        understanding: gotUnderstand,
        support: gotSupported,
        comments: gotComment
    };
    axios.post('/feedback', addFeedback).then((response)=>{
        console.log(response.data);
    }).catch((err)=>{
        console.log(err);
        alert('error adding feeback to server')
    })
    history.push('/feedback');
}         
    

  return (
    <div>
      <h1>Review Your Feedback</h1>
         
 
    <p> Feeling: { gotFeeling} </p>
    <p> Understanding: { gotUnderstand} </p>
    <p> Support: { gotSupported} </p>
    <p> Comments: { gotComment} </p>
  
    
    <button onClick={sendFeedback}>SUBMIT</button>
    </div>

  );
}

export default Review;



