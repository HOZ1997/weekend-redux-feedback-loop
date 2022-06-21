import React from 'react';
import { useSelector } from 'react-redux';

function Review() {
    const gotFeeling = useSelector( store => store.sendFeeling );
    const gotUnderstand = useSelector( store => store.sendUnderstand );
    const gotSupported = useSelector( store => store.sendSupported );
    const gotComment = useSelector( store => store.sendComment );
  return (
    <div>
      <h1>Review Your Feedback</h1>
         
 
    <p> Feelings: { gotFeeling} </p>
    <p> Understanding: { gotUnderstand} </p>
    <p> Support: { gotSupported} </p>
    <p> Comments: { gotComment} </p>

    <li><a href="/#/home">{ gotFeeling }</a></li>
    </div>


  );
}

export default Review;



// import React from 'react';
// import {useState} from 'react';
// import {useDispatch} from 'react-redux';  

// let reviewing =[];

// function Review(){
//     const dispatch = useDispatch();
//     const [review, setReview] = useState('');
//     //const history = useHistory();
  
//     const changeReview = (event) => {
//       setReview(event.target.value)
//     }
  
//     const addComment = () =>{
//       dispatch({type: 'SEND_REVIEW', payload: comment})
//       //history.push ('/comment')
//     }
  
//     return (
//       <div>
//         <div>
//              <input type="text" placeholder="comment" onChange={changeComment}></input>
//              <button onClick={addComment}>SUBMIT</button>
//           </div>
  
//           <div className="submitinfo">
  
//         {comment.map((comment, i) => 
//           <img 
//             key={i}
//             src={comment}
//           />
//         )}
//         </div>
//       </div>
    
//     );
//   } 