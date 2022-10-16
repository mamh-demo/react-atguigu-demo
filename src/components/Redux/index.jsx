import React from 'react'

import './index.css'
import Count from "./Count";


import CountContainer from "../../containers/Count";
import Personontainer from "../../containers/Person";


export default class Redux extends React.Component {
    render() {

        return (
<div>
<h2>Redux组件内容</h2>
    <hr/>
<div>
    <Count/>
    <hr/>
    <CountContainer/>
    <hr/>
    <Personontainer/>
</div>
</div>
        )
    }



}




