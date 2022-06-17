import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';  

let feelings =[];

function Feeling(){
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
    //const history = useHistory();
  
    const changeFeeling = (event) => {
      setFeeling(event.target.value)
    }
  
    const addFeeling = () =>{
      dispatch({type: 'SEND_FEELING', payload: feeling})
    }
  
    return (
      <div>
        <div>
             <input type="text" placeholder="feeling" onChange={changeFeeling}></input>
             <button onClick={addFeeling}>Next</button>
          </div>
  
          <div className="feelinginfo">
  
        {feelings.map((feeling, i) => 
          <img 
            key={i}
            src={feeling}
          />
        )}
        </div>
      </div>
    
    );
  }
  




export default Feeling; 