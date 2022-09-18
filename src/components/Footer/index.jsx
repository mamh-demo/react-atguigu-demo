import React from 'react'


export default class Footer extends React.Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"/>
                </label>
                <span>
                    <span>已完成 0</span> / 全部 2
                </span>
                <button className="btn btn-danger">清除已完成</button>
            </div>
        )
    }


}




