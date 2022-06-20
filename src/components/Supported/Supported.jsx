import React from 'react';

function Supported() {
  return (
    <div>
      <h1>Supported</h1>
   
    </div>
  );
}

export default Supported;







// import React from 'react';
// import {useState} from 'react';
// import {useDispatch} from 'react-redux';  

// let support =[];

// function Supported(){
//     const dispatch = useDispatch();
//     const [supported, setSupported] = useState('');
//     //const history = useHistory();
  
//     const changeSupported = (event) => {
//       setSupported(event.target.value)
//     }
  
//     const addSupported = () =>{
//       dispatch({type: 'SEND_SUPPORT', payload: supported})
//       //history.push ('/understand')
//     }
  
//     return (
//       <div>
//         <div>
//              <input type="text" placeholder="Support required information" onChange={changeSupported}></input>
//              <button onClick={addSupported}>Next</button>
//           </div>
  
//           <div className="supportinfo">
  
//         {support.map((supported, i) => 
//           <img 
//             key={i}
//             src={supported}
//           />
//         )}
//         </div>
//       </div>
    
//     );
//   }
  




// export default Supported; 