import React from 'react'

import Search from "./components/Search";

import List from "./components/List";


import './App.css'


export default class App extends React.Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: '',


    }

    updateAppState = (s) =>{
        this.setState(s)
    }

    render() {
        const {users} = this.state
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List users={users}/>
            </div>
        )
    }


}




