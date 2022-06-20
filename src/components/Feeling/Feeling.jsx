import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';  

let feelings =[];

function Feeling(){
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
   //const history = useHistory();
  
    const changeFeeling = (event) => {
      console.log (feelings)
      setFeeling(event.target.value)
    }
  
    const addFeeling = () =>{
      dispatch({type: 'SEND_FEELING', payload: feeling})
    //history.push ('/understanding')
    }
  
    return (
      <div>
        <div>
        <h1>How are you feeling today?</h1>
        <p>Feeling?</p>
        <input type="text" placeholder="Feeling required information" onChange={changeFeeling}></input>
             <button onClick={addFeeling}>NEXT</button>
          </div>
          </div>
    );
  }
  




export default Feeling; 