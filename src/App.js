import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import './App.css'


export default class App extends React.Component {


    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List/>
                    <Footer/>
                </div>
            </div>
        )
    }


}




