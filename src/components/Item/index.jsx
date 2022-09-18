import React from 'react'
import './index.css'

export default class Item extends React.Component {
    render() {
        const {id, name, done} = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{id}={name}</span>
                </label>
                <button className="btn btn-daner" style={{display: 'none'}}>delete</button>
            </li>
        )
    }


}




