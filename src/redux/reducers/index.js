import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import appReducer from "./app/appReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    app: appReducer,
});

export default rootReducer;