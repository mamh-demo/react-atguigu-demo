//
// function createIncrementAction(data){
//     return {type:'increment', data}
// }
//
// function createDecrementAction(data){
//     return {type:'decrement', data}
// }

import {DECREMENT, INCREMENT} from './constant'

export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

