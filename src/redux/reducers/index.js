import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import appReducer from "./app/appReducer";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    routing: routerReducer,
    app: appReducer,
    form:formReducer,
});

export default rootReducer;