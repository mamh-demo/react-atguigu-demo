import { legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'

import thunk from 'redux-thunk'

import countReducer from './reducers/count'
import personReducer from "./reducers/person";

const allReducers = combineReducers(
    {
        he: countReducer,
        rens:  personReducer
    }
)

const store = createStore(allReducers, applyMiddleware(thunk))


export default store


