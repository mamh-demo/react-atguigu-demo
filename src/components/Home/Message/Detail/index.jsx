import React from 'react'


export default class Detail extends React.Component {
    render() {
        console.log(this.props)
        const {id,title} = this.props.location.state || {}
        return (
<div>
    <h4>Message组件内容Detail</h4>

    <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
    </ul>
</div>
        )
    }



}




