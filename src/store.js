// THIS IS JUST BOILERPLATE CODE, no logic present here.

import {createStore, applyMiddleware, combineReducers } from "redux"; 
import { composeWithDevTools } from "redux-devtools-extension";

import thunk  from "redux-thunk";
import { ObjectReducer } from "./Reducers/ObjectReducer";
import { TodoReducer } from "./Reducers/TodoReducer";
import createSagaMiddleware from "@redux-saga/core";
import myFirstReducer from "./Reducers/myFirstReducer";
import mySaga from "./sagas";


const reducers = combineReducers({
    // All reducers go here.
    Todo: TodoReducer,
    myObject: ObjectReducer,
    sr: myFirstReducer,
}); 

const intialState = {};

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware]; 

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    intialState,
   composeWithDevTools(applyMiddleware(...middleware)),
//    applyMiddleware(sagaMiddleware),
)

// sagaMiddleware.run(); 

export default store; 