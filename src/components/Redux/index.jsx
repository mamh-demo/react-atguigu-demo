import React from 'react'

import './index.css'
import Count from "./Count";

import CountUI from "./CountUI";

import CountContainer from "../../containers/Count";
import store from "../../redux/store";


export default class Redux extends React.Component {
    render() {

        return (
<div>
<h2>Redux组件内容</h2>
    <hr/>
<div>
    <Count/>
    <hr/>
    <CountContainer store={store}/>

</div>
</div>
        )
    }



}




