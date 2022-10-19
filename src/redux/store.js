import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";

import thunk from 'redux-thunk'

import countReducer from './reducers/count'
import personReducer from "./reducers/person";

const allReducers = combineReducers(
    {
        count: countReducer,
        persons: personReducer
    }
)

const store = createStore(allReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


export default store


