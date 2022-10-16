import React from 'react';
import {Button} from 'antd';


import {connect} from 'react-redux'
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../redux/actions/count";

import './index.css';

class CountUI extends React.Component {
    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value)
    }

    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value)

    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value)
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.asyncjia(value, 500)
    }


    render() {
        return (
            <div>
                <h3>countUI当前求和是： {this.props.count}, rens len: {this.props.renshu}</h3>
                <select ref={c => this.selectNumber = c}>
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


const CountContainer = connect(
    state => ({
        count: state.he,
        renshu: state.rens.length,
    }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        asyncjia: createIncrementAsyncAction,
    }
)(CountUI)


export default CountContainer


/*

一个组件要和redux打交道要经过那几步？
1.定义好UI组件，不暴露
2.引入 connect 生成一个组件容器，并暴露，写法如下
connect（
    state => ( {key: value} ) , // 映射状态
    {key: xxxAction} ,          // 映射操作状态的方法
）（UI组件类名）
3.在 UI 组件 中通过 this.prop.xxx 读取和操作状态。

 */


