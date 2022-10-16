import React from 'react';
import {connect} from 'react-redux'

import './index.css';

class PersonUI extends React.Component {

    addPerson = () => {
        const name = this.nameNode;
        const age = this.ageNode;


    }

    render() {
        return (
            <div>
                <h3>PersonUI</h3>
                <input ref={c => this.nameNode = c} type="text" placeholder="input name"/>&nbsp;
                <input ref={c => this.ageNode = c} type="text" placeholder="input age"/>&nbsp;
                <button onClick={this.addPerson}>add person</button>&nbsp;
            </div>
        )
    }


}


function mapStateToProps(state) {
    return {count: state}
}

function mapDispatchToProps(dispatch) {
    return {}
}

const Personontainer = connect(mapStateToProps, mapDispatchToProps)(PersonUI)


export default Personontainer


/*

一个组件要和redux打交道要经过那几步？
1.定义好UI组件，不暴露
2.引入 connect 生成一个组件容器，并暴露，写法如下
connect（
    state => ( {key: value} ) , // 映射状态
    {key: xxxAction} ,          // 映射操作状态的方法
）（UI组件类名）
3.在 UI 组件 中通过 this.prop.xxx 读取和操作状态。

 */


