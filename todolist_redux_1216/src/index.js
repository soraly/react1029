import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>
   
    , document.getElementById('root'))

//模拟createStore
const imitate = () => {
    var createStore = (reducer) => {
        var state, listeners = [];
        //用来返回当前的state
        var getState = () => state
        //传入action，调用reducer返回新的state
        var dispatch = (action) => {
            reducer(state, action);
        }
        var subscribe = () => { }
        return { getState, subscribe, dispatch }
    }
}

