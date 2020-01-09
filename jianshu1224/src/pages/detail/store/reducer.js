import { types } from './index'
import { actions } from '../../home/store';

const initState = {

}

export default (state = initState, action) => {
    const newState = JSON.parse(state);
    switch (action.type){

    }
    return newState
}