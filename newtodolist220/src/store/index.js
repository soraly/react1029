import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import {reducer as listReducer} from '../components/List/store'
import {reducer as titleReducer} from '../components/Title/store'
import {reducer as todoReducer} from '../components/todoList/store'

const finalReducer = combineReducers({
    home: reducer,
    title: titleReducer,
    listReducer,
    todo: todoReducer
})

const store = createStore(finalReducer, applyMiddleware(thunk));

export default store;