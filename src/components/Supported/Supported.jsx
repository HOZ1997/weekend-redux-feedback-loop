import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';  
import {useHistory} from 'react-router-dom'; 

let support =[];

function Supported(){
    const dispatch = useDispatch();
    const [supported, setSupported] = useState('');
    const history = useHistory();
  
    const changeSupported = (event) => {
        console.log (support)
      setSupported(event.target.value)
    }
  
    const addSupported = () =>{
      dispatch({type: 'SEND_SUPPORT', payload: supported})
      history.push ('/comment')
    }
  
    return (
      <div>
        <div>
        <h1>How well are you being supported?</h1>
        <p>Support?</p>
             <input type="text" placeholder="Support required information" onChange={changeSupported}></input>
             <button onClick={addSupported}>NEXT</button>
          </div>
  
      </div>
    
    );
  }
  




 export default Supported; 