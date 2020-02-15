import { createStore, combineReducers } from 'redux'
import reducer from './reducer'
import {reducer as listReducer} from '../components/List/store'

const finalReducer = combineReducers({
    home: reducer,
    listReducer
})

const store = createStore(finalReducer);

export default store;