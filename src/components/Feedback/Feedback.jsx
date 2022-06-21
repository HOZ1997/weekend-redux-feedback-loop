import React from 'react';

function Feedback() {
  return (
    <div>
      <h1>Feedback!</h1>
   

     <h1>Thank you! </h1>

     {/* //Todo Leave New Feedback button that resets and brings you to home */}
    </div>
  );
}
// import React from 'react';
// import {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import {useHistory} from 'react-router-dom';   

// let feedbacks =[];

// function Feedback(){
//     const dispatch = useDispatch();
//     const history =useHistory();
//     const [feedbacks, setFeedback] = useState('');
   
  
//     const changeFeedback = (event) => {
//       console.log (feedbacks)
//       setFeeling(event.target.value)
//     }
  
//     const addFeeback = () =>{
//       dispatch({type: 'SEND_FEEDBACK', payload: feedbacks})
//     history.push ('/home')
//     }
  
//     return (
//       <div>
//         <div>
//         <h1>How are you feeling today?</h1>
//         <p>Feeling?</p>
        
//              <button onClick={addFeeling}>NEXT</button>
//           </div>
//           </div>
//     );
//   }





export default Feedback;