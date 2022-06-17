import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'; 
import {Provider} from 'react-redux'; 

const sendFeeling = (state ='', action) =>{
    if (action.type === 'SEND_FEELING'){
        state = action.payload; 
    }
    return state; 
}

// const sendSupported = (state ='', action) =>{
//     if (action.type === 'SEND_SUPPORT'){
//         state = action.payload; 
//     }
//     return state; 
// }

const store = createStore(
    combineReducers({
        sendFeeling
        //sendSupported

    })
)



ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();