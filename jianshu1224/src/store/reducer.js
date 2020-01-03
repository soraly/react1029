import { combineReducers } from 'redux'
import {reducer as headerReducer} from '../components/header/store'
import {reducer as homeReducer} from '../pages/home/store'

export default combineReducers({
    head: headerReducer,
    home: homeReducer,
})