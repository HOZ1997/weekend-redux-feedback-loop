//import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';  

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
             <input onChange={changeFeeling} type="text" placeholder="Feeling"/><button onClick={addFeeling}>Next</button>
          </div>
  
          <div className="feelinginfo">
  
        {feeling.map((feeling, i) => 
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