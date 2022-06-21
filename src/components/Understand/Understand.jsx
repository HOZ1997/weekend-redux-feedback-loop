// import React from 'react';

// function Understand() {
//   return (
//     <div>
//       <h1>Understand</h1>
   
//     </div>
//   );
// }

// export default Understand;




import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';  
import {useHistory} from 'react-router-dom'; 

let understanding =[];

function Understand(){
    const dispatch = useDispatch();
    const [understand, setUnderstand] = useState('');
    const history = useHistory();
  
    const changeUnderstand = (event) => {
        console.log (understanding)
      setUnderstand(event.target.value)
    }
  
    const addUnderstand = () =>{
      dispatch({type: 'SEND_UNDERSTAND', payload: understand})
      history.push ('/supported')
    }
  
    return (
      <div>
        <div>
        <h1>How well are you understanding the content?</h1>
        <p>Understanding?</p>
             <input type="text" placeholder="Understanding required information" onChange={changeUnderstand}></input>
             <button onClick={addUnderstand}>NEXT</button>
          </div>
      </div>
    
    );
  }
  




export default Understand; 