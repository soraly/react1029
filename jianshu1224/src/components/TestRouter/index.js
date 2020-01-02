import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Home = ()=>{
    return <div>i am  Home</div>
}
const News = ()=>{
    return <div>i am  news...</div>
}

export default class Index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Link to="/">Home</Link>{"   "}
                <Link to="/news">news</Link>
                <div>
                    <Route exact path='/' render={Home}></Route>
                    <Route exact path='/news' render={News}></Route>
                </div>
                    
                </BrowserRouter>
            </div>
        )
    }
}
