import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import './App.css'


export default class App extends React.Component {
    state = {
        todos: [
            {id: 1, name: 'chifan', done: true},
            {id: 2, name: 'shuijiao', done: true},
            {id: 3, name: 'docode', done: false},
            {id: 4, name: 'guangjie', done: false},
            {id: 5, name: 'ailala', done: false},
        ]
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List todos={this.state.todos}/>
                    <Footer/>
                </div>
            </div>
        )
    }


}




