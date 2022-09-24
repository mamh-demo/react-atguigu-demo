import React from 'react'
import axios from "axios";
import PubSub from 'pubsub-js'

import './index.css'

export default class Search extends React.Component {
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text"
                           placeholder="enter the name you search"/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.searchGithub}>Search</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.fetchGithub}>Search</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </section>
        )
    }

    searchGithub = () => {


        //js的解构赋值
        const {keyWordElement: {value: keyWord}} = this
        PubSub.publish('ailala', {isFirst: false, isLoading: true})

        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                PubSub.publish('ailala', {users: response.data.items, isLoading: false})
            },
            error => {
                PubSub.publish('ailala', {err: error.message, isLoading: false})
            }
        )


    }

    fetchGithub = () => {


        //js的解构赋值
        const {keyWordElement: {value: keyWord}} = this
        PubSub.publish('ailala', {isFirst: false, isLoading: true})

        // fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
        //     response => {
        //         return response.json()
        //     },
        //     error => {
        //         return new Promise(()=>{ console.log(error)})
        //     }
        // ).then(
        //     response => {
        //         console.log(response)
        //         PubSub.publish('ailala', {users: response.items, isLoading: false})
        //     },
        //     error => {
        //         console.log(error)
        //         PubSub.publish('ailala', {err: error.message, isLoading: false})
        //     }
        // )


        fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(
            response => {
                return response.json()
            },
        ).then(
            response => {
                console.log(response)
                PubSub.publish('ailala', {users: response.items, isLoading: false})
            },
        ).catch(
            error => {
                console.log(error)
                PubSub.publish('ailala', {err: error.message, isLoading: false})
            }
        )

        // try {
        //     const response = await fetch(`http://localhost:3000/api1/search/users2?q=${keyWord}`)
        //     const data = await response.json()
        //     PubSub.publish('ailala', {users: data.items, isLoading: false})
        // } catch (error) {
        //     console.log(error)
        //     PubSub.publish('ailala', {err: error.message, isLoading: false})
        // }


    }


}




