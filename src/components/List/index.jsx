import React from 'react'

export default class List extends React.Component {

    render() {
        const {users, isFirst, isLoading, err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2> please input to search</h2> :
                        isLoading ? <h2>loading.....</h2> :
                            err ? <h2>error...... {err}</h2> :
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




