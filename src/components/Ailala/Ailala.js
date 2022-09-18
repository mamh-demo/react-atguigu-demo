import React from 'react'

import axios from "axios";

import './Ailala.css'

export default class Ailala extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.getStuData}>getStudents</button>
                <button onClick={this.getCarData}>getCars</button>
            </div>
        )
    }

    getStuData = () => {
        console.log("getStuData      ")
        axios.get("http://localhost:5000/students").then(
            response => {
                console.log(response.data)
            },
            error => {
                console.log(error)
            }
        )


    }

    getCarData = () => {
        console.log("getCarData")
        axios.get("http://localhost:5001/cars").then(
            response => {
                console.log(response.data)
            },
            error => {
                console.log(error)
            }
        )
    }


}




