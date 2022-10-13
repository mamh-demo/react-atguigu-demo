import React from 'react'
import {Link, Route, Switch} from "react-router-dom";

import {Button, Tooltip} from 'antd';
import {SearchOutlined, WechatOutlined} from "@ant-design/icons";

import Detail from "./Detail";

import 'antd/dist/antd.min.css';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function onChange(date, dateString){
    console.log(date, dateString);
}

export default class Message extends React.Component {

    state = {
        messageArr:[
            {id:"01", title:"xxxx1Button"},
            {id:"02", title:"xxxx2Tooltip"},
            {id:"03", title:"xxxx3SearchOutlined"},
            {id:"04", title:"xxxx4WechatOutlined"},
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

    <hr/>
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    <hr/>
    <Button type="primary" shape="circle">push</Button>
    <hr/>
    <Button type="primary">replace</Button>
    <hr/>
    <Button type="dashed">dashed button</Button>
    <hr/>
    <WechatOutlined/>
    <hr/>
    <Button type="primary" shape="round">
        A <SearchOutlined/><WechatOutlined/>
    </Button>
    <hr/>
    <Button type="primary" icon={<SearchOutlined />}>
        Search
    </Button>
    <hr/>
    <Button icon={<SearchOutlined />}>Search</Button>
    <hr/>
    <DatePicker onChange={onChange} /><br />
    <DatePicker onChange={onChange} picker="week" /><br />
    <DatePicker onChange={onChange} picker="month" /><br />
    <DatePicker onChange={onChange} picker="quarter" /><br />
    <DatePicker onChange={onChange} picker="year" /><br />
    <RangePicker/>
    <br />


</div>
        )
    }



}




