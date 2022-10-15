import React from 'react';
import {Button} from 'antd';


import './Count.css';


export default class Count extends React.Component {
    state = {total: 0}



    increment = () => {
        const {value} = this.selectNumber
        const {total} = this.state
        this.setState({total: total+value*1})
    }

    decrement = () => {
        const {value} = this.selectNumber
        const {total} = this.state

        this.setState({total: total-value*1})
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const {total} = this.state
        if((total % 2) !== 0){
            this.setState({total: total+value*1})
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        const {total} = this.state
        setTimeout(()=>{
            this.setState({total: total+value*1})
        }, 5000)
    }


    render() {
        return (
<div>
    <h3>当前求和是：{this.state.total}</h3>
    <select defaultValue={1} ref={ c => this.selectNumber=c }>
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




