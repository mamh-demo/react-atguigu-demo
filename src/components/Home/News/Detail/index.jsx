import React from 'react'
import queryString from 'query-string'

export default class Detail extends React.Component {
    render() {
        // 接收 params 参数
        // const {id,title} = this.props.match.params

        // 接收 search 参数
        const {search} = this.props.location
        const {id, title} = queryString.parse(search.slice(1))

        return (
<div>
    <h4>News组件内容Detail</h4>

    <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
    </ul>
</div>
        )
    }



}




