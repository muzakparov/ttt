import { 
    applyMiddleware,
    createStore,
 } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import reduxPromiseMiddleware from "redux-promise-middleware"

//reducers
import reducers from "./reducers"


//middleWare
const middleWare = applyMiddleware( reduxPromiseMiddleware(), thunk, logger );

const store = createStore(reducers, {
    history:[{
        squares:Array(9).fill(null),
    }],
    stepNumber:0,          
    xIsNext: true,    
}, middleWare)

store.subscribe(()=>{
    console.log("store received", store.getState())
})

store.dispatch({type:"type",payload:"payload"})


export default store
