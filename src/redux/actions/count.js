//
// function createIncrementAction(data){
//     return {type:'increment', data}
// }
//
// function createDecrementAction(data){
//     return {type:'decrement', data}
// }

import {DECREMENT, INCREMENT} from '../constant'

export const inc = data => ({type: INCREMENT, data})
export const dec = data => ({type: DECREMENT, data})

export const incAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(inc(data))
        }, time)
    }


}
