import React from 'react'


export default class Detail extends React.Component {
    render() {
        const {id,title} = this.props.match.params
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




