import React from 'react'
import './index.css'

export default class Item extends React.Component {
    state = {
        mouse: false
    }

    render() {
        const {id, name, done} = this.props
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}
                style={{backgroundColor: this.state.mouse ? '#ddd' : '#fff'}}
            >
                <label>
                    <input onChange={this.handleChange(id)} type="checkbox" defaultChecked={done}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-daner" style={{display: 'none'}}>delete</button>
            </li>
        )
    }

    handleChange = (id) => {
        return (e) => {
            this.props.updateTodo(id, e.target.checked)
        }
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }

}




