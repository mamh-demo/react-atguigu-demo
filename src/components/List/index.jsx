import React from 'react'


export default class List extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <label>
                        <input type="checkbox"/>
                        <span>xxxx</span>
                    </label>
                    <button className="btn btn-daner" style={{display: 'none'}}>delete</button>
                </li>
                <li>
                    <label>
                        <input type="checkbox"/>
                        <span>yyyyy</span>
                    </label>
                    <button className="btn btn-daner" style={{display: 'none'}}>delete</button>
                </li>

                <li>
                    <label>
                        <input type="checkbox"/>
                        <span>xxxxxx</span>
                    </label>
                    <button className="btn btn-daner" style={{display: 'none'}}>delete</button>
                </li>
            </ul>
        )
    }


}




