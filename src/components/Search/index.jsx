import React from 'react'
import axios from "axios";
import './index.css'

export default class Search extends React.Component {
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=> this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }

    search = ()=>{
        //js的解构赋值
        const {keyWordElement:{value: keyWord}} = this
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                console.log("success", response.data)
            },
            error => {
                console.log("error", error)
            }
        )






    }





}




