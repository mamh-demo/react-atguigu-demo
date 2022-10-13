import React from 'react'
import {Link, Route, Switch} from "react-router-dom";
import { Button } from 'antd';

import Detail from "./Detail";

import 'antd/dist/antd.min.css';


export default class Message extends React.Component {

    state = {
        messageArr:[
            {id:"01", title:"xxxx1"},
            {id:"02", title:"xxxx2"},
            {id:"03", title:"xxxx3"},
            {id:"04", title:"xxxx4"},
        ]
    }

    render() {
        const {messageArr} = this.state
        return (
<div>
<h3>Message组件内容</h3>
    <ul>
{
messageArr.map((msgObj) => {
    return(
        <li  key={msgObj.id}>
            {/*向路由组件传递 params参数*/}
            <Link to={ {
                pathname: '/home/message/detail',
                state:{
                    id: msgObj.id,
                    title: msgObj.title
                }}
            }>{msgObj.title}</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary">push</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary">replace</Button>

        </li>
    )
})


}
    </ul>
    <hr/>
    <Switch>
        {/*声明接收 params参数*/}
        <Route path="/home/message/detail" component={Detail}/>
    </Switch>
</div>
        )
    }



}




