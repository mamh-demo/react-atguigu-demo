import React from 'react'
import {Link, Route, Switch} from "react-router-dom";

import Detail from "../News/Detail";


export default class News extends React.Component {
    render() {

        return (
<div>
<h3>News组件内容</h3>
    <ul>

        <li  key={1}>
            {/*向路由组件传递 params参数*/}
            <Link to="/home/news/detail/1/news001">news001</Link>
        </li>
        <li  key={1}>
            {/*向路由组件传递 params参数*/}
            <Link to="/home/news/detail/2/news002">news002</Link>
        </li>
        <li  key={1}>
            {/*向路由组件传递 params参数*/}
            <Link to="/home/news/detail/3/news003">news003</Link>
        </li>
    </ul>
    <hr/>
    <Switch>
        {/*声明接收 params参数*/}
        <Route path="/home/news/detail/:id/:title" component={Detail}/>
    </Switch>

</div>
        )
    }



}




