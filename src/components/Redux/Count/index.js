import React from 'react';
import {Button} from 'antd';

import store from '../../../redux/store'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../../redux/count_action'
import './index.css';


export default class Count extends React.Component {

    // componentDidMount() {
    //     // 利用 componentDidMount 方法添加一个 监听器，用来 检测 redux 中状态的变化，只要变化就调用render。其实就是 调用了 this.setState({}) 方法，里面传入一个空的对象，只要调用 setState 就会更新 state
    //     store.subscribe(
    //         ()=>{
    //             this.setState({})
    //         }
    //     )
    //
    //
    // }

    increment = () => {
        const {value} = this.selectNumber
        // store.dispatch({
        //     type:'increment',
        //     data: value,
        // })
        store.dispatch(createIncrementAction(value))
    }

    decrement = () => {
        const {value} = this.selectNumber
        store.dispatch({
            "type":'decrement',
            "data": value,
        })
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const total = store.getState()
        if((total % 2) !== 0){
            store.dispatch({
                "type":'increment',
                "data": value,
            })
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        store.dispatch(createIncrementAsyncAction(value, 5000))
    }


    render() {
        return (
<div>
    <h3>当前求和是：{store.getState()}</h3>
    <select   ref={ c => this.selectNumber=c }>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>&nbsp;
    <Button onClick={this.increment} type="primary">+ Button</Button>&nbsp;
    <Button onClick={this.decrement} type="primary">- Button</Button>&nbsp;
    <Button onClick={this.incrementIfOdd} type="primary">奇数再加</Button>&nbsp;
    <Button onClick={this.incrementAsync} type="primary">异步加</Button>&nbsp;

</div>
        )
    }


}




