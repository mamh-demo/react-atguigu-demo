import React from 'react'
import { NavLink} from 'react-router-dom'

import './index.css'

export default class AiNavLink extends React.Component {
    render() {

        return (
            <NavLink activeClassName="active" className="list-group-item"  {...this.props}></NavLink>
        )
    }



}




