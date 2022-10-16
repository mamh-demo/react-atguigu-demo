import {ADDPERSON} from '../constant'


const initState = [
    {id:"001", name:"tom", age:17}
]

function personReducer(preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case ADDPERSON:
            return [data, ...preState];
        default:
            return preState
    }

}

export default personReducer
