import React from 'react'
import {nanoid} from 'nanoid'

import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import './App.css'
import Ailala from "./components/Ailala/Ailala";


export default class App extends React.Component {
    state = {
        todos: [
            {id: nanoid(), name: 'chifan', done: true},
            {id: nanoid(), name: 'shuijiao', done: true},
            {id: nanoid(), name: 'docode', done: false},
            {id: nanoid(), name: 'guangjie', done: false},
            {id: nanoid(), name: 'ailala', done: false},
        ]
    }

    addTodo = (obj) => {
        const {todos} = this.state
        const newtodos = [obj, ...todos]
        this.setState({
            todos: newtodos
        })
    }

    updateTodo = (id, done) => {
        const {todos} = this.state
        const newtodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo, done: done
                }
            } else {
                return {
                    ...todo
                }
            }
        })

        this.setState({
            todos: newtodos
        })
    }

    checkAllTodo = (d) => {
        const {todos} = this.state
        const newtodos = todos.map((todo) => {
            return {
                ...todo, done: d
            }

        })

        this.setState({
            todos: newtodos
        })


    }


    deleteTodo = (id) => {
        const {todos} = this.state
        const newtodos = todos.filter((todo) => {
            return todo.id !== id
        })

        this.setState({
            todos: newtodos
        })

    }

    removeAllTodo = () => {
        const {todos} = this.state
        const newtodos = todos.filter((todo) => {
            return !todo.done
        })

        this.setState({
            todos: newtodos
        })
    }


    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={this.state.todos}
                          updateTodo={this.updateTodo}
                          deleteTodo={this.deleteTodo}
                    />
                    <Footer todos={this.state.todos}
                            checkAllTodo={this.checkAllTodo}
                            removeAllTodo={this.removeAllTodo}

                    />
                    <Ailala/>
                </div>
            </div>
        )
    }


}




