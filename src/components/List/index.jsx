import React from 'react'

import Item from "../Item";

export default class List extends React.Component {
    render() {
        return (
            <ul className="todo-main">
                <Item/>
                <Item/>
                <Item/>
            </ul>
        )
    }


}




