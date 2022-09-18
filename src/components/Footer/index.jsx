import React from 'react'

import './index.css'

export default class Footer extends React.Component {
    render() {
        const {todos} = this.props

        const totalDone = todos.reduce((pre, cur) => {
            if (cur.done)
                return pre + 1
            else
                return pre
        }, 0)
        const total = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckall}
                           checked={total === totalDone && total != 0}/>
                </label>
                <span>
                    <span>已完成 {totalDone}</span> / 全部 {total}
                </span>
                <button className="btn btn-danger">清除已完成</button>
            </div>
        )
    }

    handleCheckall = (e) => {
        this.props.checkAllTodo(e.target.checked)
    }

}




