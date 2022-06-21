import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Review() {
    const gotFeeling = useSelector( store => store.sendFeeling );
    const gotUnderstand = useSelector( store => store.sendUnderstand );
    const gotSupported = useSelector( store => store.sendSupported );
    const gotComment = useSelector( store => store.sendComment );
    //const gotSubmit = useSelector (store=> store.sendSubmit);
    
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
}         
    

  return (
    <div>
      <h1>Review Your Feedback</h1>
         
 
    <p> Feeling: { gotFeeling} </p>
    <p> Understanding: { gotUnderstand} </p>
    <p> Support: { gotSupported} </p>
    <p> Comments: { gotComment} </p>
    {/* <li><a href="/#/home">{ gotFeeling }</a></li> */}
    
    <button onClick={sendFeedback}>SUBMIT</button>
    </div>

  );
}

export default Review;



