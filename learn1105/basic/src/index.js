import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from './reducer'

//1. 创建store
const store = createStore(reducer)

//2. state
const state = store.getState();
console.log(state)

//3. render
const render = () => ReactDOM.render(
    <App time={state.time}
        onIncrement={() => store.dispatch({ type: 'add' })}
        onDecrease={() => store.dispatch({ type: 'decrease' })}
    />
    , document.getElementById('root'));

render()

store.subscribe(render)

//模拟createStore
const imitate = () => {
    var createStore = (reducer) => {
        var state, listeners = [];
        //用来返回当前的state
        var getState = () => state
        //传入action，调用reducer返回新的state
        var dispatch = (action) => { 
            reducer(state,action);
        }
        var subscribe = () => { }
        return { getState, subscribe, dispatch }
    }
}

