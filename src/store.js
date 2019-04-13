import { applyMiddleware, compose, createStore } from 'redux';
import thunk from "redux-thunk";

import rootReducer from './reducer/index'

const composeEnhancer = 
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancer(
    applyMiddleware(thunk)  
);

const token = localStorage.getItem('token');
const initialState = {};
if(token) {
    initialState.auth = {
        token
    }
}

export default createStore(rootReducer, initialState, enhancer);
