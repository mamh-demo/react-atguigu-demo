import React from 'react'
import './index.css'

export default class Item extends React.Component {
    state = {
        mouse: false
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
                style={{backgroundColor: mouse ? '#ddd' : '#fff'}}
            >
                <label>
                    <input onChange={this.handleChange(id)} type="checkbox" checked={done}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)}
                        className="btn btn-danger"
                        style={{display: mouse ? 'block' : 'none'}}>delete
                </button>
            </li>
        )
    }

    handleDelete = (id) => {
        return () => {
            if (window.confirm("delete???"))
                this.props.deleteTodo(id)
        }
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




