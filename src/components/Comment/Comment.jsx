// import React from 'react';

// function Comment() {
//   return (
//     <div>
//       <h1>Comment</h1>
   
//     </div>
//   );
// }

// export default Comment;




import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';  
import {useHistory} from 'react-router-dom';

let comments =[];

function Comment(){
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const history = useHistory();
  
    const changeComment = (event) => {
        console.log (comments)
      setComment(event.target.value)
    }
  
    const addComment = () =>{
      dispatch({type: 'SEND_COMMENT', payload: comment})
      history.push ('/review')
    }
  
    return (
      <div>
        <div>
        <h1>Any comments you want to leave?</h1>
        <p>Comments</p>
             <input type="text" placeholder="comment" onChange={changeComment}></input>
             <button onClick={addComment}>NEXT</button>
          </div>
  
      </div>
    
    );
  } 


  export default Comment;