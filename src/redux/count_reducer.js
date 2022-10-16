function countReducer(preState, action) {
    if(preState === undefined){
        preState = 0
    }

    const {type, data} = action
    switch (type) {
        case 'increment':
            return preState + data*1;
        case 'decrement':
            return preState - data*1;
        default:
            return 0
    }

}

export  default countReducer
