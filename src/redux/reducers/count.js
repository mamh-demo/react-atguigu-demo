import {DECREMENT, INCREMENT} from '../constant'

const initState = 0

function countReducer(preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return preState + data * 1;
        case DECREMENT:
            return preState - data * 1;
        default:
            return preState
    }

}

export default countReducer
