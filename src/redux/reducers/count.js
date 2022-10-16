import {DECREMENT, INCREMENT} from '../constant'

function countReducer(preState, action) {
    if (preState === undefined) {
        preState = 0
    }

    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return preState + data * 1;
        case DECREMENT:
            return preState - data * 1;
        default:
            return 0
    }

}

export default countReducer
