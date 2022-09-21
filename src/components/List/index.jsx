import React from 'react'

export default class List extends React.Component {

    render() {
        return (
            <div className="row">
                {
                    this.props.users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank"
                                   rel="noreferrer">
                                    <img src={userObj.avatar_url}
                                         style={{width: '100px'}} alt=""/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


}




