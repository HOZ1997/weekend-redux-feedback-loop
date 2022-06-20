import React from 'react';

function Comment() {
  return (
    <div>
      <h1>Comment</h1>
   
    </div>
  );
}

export default Comment;




// import React from 'react';
// import {useState} from 'react';
// import {useDispatch} from 'react-redux';  

// let comments =[];

// function Comment(){
//     const dispatch = useDispatch();
//     const [comment, setComment] = useState('');
//     //const history = useHistory();
  
//     const changeComment = (event) => {
//       setComment(event.target.value)
//     }
  
//     const addComment = () =>{
//       dispatch({type: 'SEND_COMMENT', payload: comment})
//       //history.push ('/comment')
//     }
  
//     return (
//       <div>
//         <div>
//              <input type="text" placeholder="comment" onChange={changeComment}></input>
//              <button onClick={addComment}>Next</button>
//           </div>
  
//           <div className="commentinfo">
  
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