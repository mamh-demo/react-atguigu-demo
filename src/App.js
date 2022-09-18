import React from 'react'
import Hello from "./components/Hello/Hello";
import Ailala from "./components/Ailala/Ailala"
import Welcome from "./components/Welcome/Welcome";

export default class App extends React.Component {


    render() {
        return (
            <div>
                <Hello/>
                <Ailala/>
                <Welcome/>
            </div>
        )
    }


}




