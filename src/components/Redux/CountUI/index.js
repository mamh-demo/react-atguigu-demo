import React from 'react';
import {Button} from 'antd';

import './index.css';


export default class CountUI extends React.Component {



    increment = () => {
        const {value} = this.selectNumber
    }

    decrement = () => {
        const {value} = this.selectNumber

    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber

    }

    incrementAsync = () => {
        const {value} = this.selectNumber
    }


    render() {
        return (
<div>
    <h3>countUI当前求和是：???</h3>
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




