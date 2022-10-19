import React from 'react'
import ReactDOM from 'react-dom'
import store from "./redux/store";
import {Provider} from 'react-redux'

import App from './App'

ReactDOM.render(
    /*
    此处需要用provider包裹app，目的是让app所有的后代容器组件都能接收到store
     */
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById("root")
)
















