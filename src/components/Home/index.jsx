import React from 'react'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import './index.css'

import News from './News'
import Message from './Message'
import AiNavLink from "../../components/AiNavLink";


export default class Home extends React.Component {
    render() {

        return (
<div>
<h2>Home组件内容</h2>
<div>
    <ul className="nav nav-tabs">
        <li>
            {/*<a className="list-group-item" href="./home-news.html">News</a>*/}
            <AiNavLink to="/home/news">News...</AiNavLink>

        </li>
        <li>
            {/*<a className="list-group-item" href="./home-message.html">Message</a>*/}
            <AiNavLink to="/home/message">Message...</AiNavLink>

        </li>
    </ul>
    <Switch>
    <Route path="/home/news" component={News}/>
    <Route path="/home/message" component={Message}/>
    <Redirect to="/home/news"/>
    </Switch>
</div>
</div>
        )
    }



}




