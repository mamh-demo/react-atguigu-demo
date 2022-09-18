import React from 'react'
import './index.css'

export default class Item extends React.Component {
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox"/>
                    <span>xxxx</span>
                </label>
                <button className="btn btn-daner" style={{display: 'none'}}>delete</button>
            </li>
        )
    }


}




