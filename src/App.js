import React from 'react'

import Search from "./components/Search";

import List from "./components/List";


import './App.css'


export default class App extends React.Component {
    state = {
        users:[]
    }

    saveUsers = (users) =>{
        this.setState({
            users
        })
    }


    render() {
        const {users} = this.state
        return (
            <div className="container">
                <Search saveUsers={this.saveUsers}/>
                <List users={users}/>
            </div>
        )
    }


}




