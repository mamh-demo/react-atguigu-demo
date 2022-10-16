import CountUI from '../../components/Redux/CountUI'


import {connect} from 'react-redux'
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action";


function mapStateToProps(state) {
    return {count: state}
}

function mapDispatchToProps(dispatch) {
    return {
        jia: (num) => {
            dispatch(createIncrementAction(num))
        },
        jian: (num) => {
            dispatch(createDecrementAction(num))
        },
        asyncjia: (num, time) => {
            dispatch(createIncrementAsyncAction(num, time))
        },
    }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)


export default CountContainer

