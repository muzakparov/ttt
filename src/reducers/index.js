import { combineReducers } from "redux"

import history from "./historyReducer"
import stepNumber from "./stepNumberReducer"
import v from "./xIsNextReducer"

const reducers = combineReducers({
    history,
    stepNumber,
    xIsNext,
})


export default reducers