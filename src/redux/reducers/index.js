import {combineReducers} from 'redux'


import count from './count'
import persons from "./person"

const allReducers = combineReducers(
    {
        count,
        persons,
    }
)


export default allReducers


