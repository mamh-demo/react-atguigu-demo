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
            {/*向 路由组件传递 search 参数*/}
            <Link to="/home/news/detail/?id=01&title=news001">news001</Link>
        </li>
        <li  key={2}>
            {/*向路由组件传递 search 参数*/}
            <Link to="/home/news/detail/?id=02&title=news002">news002</Link>
        </li>
        <li  key={3}>
            {/*向路由组件传递 search 参数*/}
            <Link to="/home/news/detail/?id=03&title=news003">news003</Link>
        </li>
    </ul>
    <hr/>
    <Switch>
        {/*声明接收 search 参数, 正常注册路由无需做其他设置*/}
        <Route path="/home/news/detail" component={Detail}/>
    </Switch>

</div>
        )
    }



}




