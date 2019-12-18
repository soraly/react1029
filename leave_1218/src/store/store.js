import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import sagaCreator from 'redux-saga'
import sagaJs from '../saga'

const sageMiddleware = sagaCreator()

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(...[sageMiddleware]),
    // other store enhancers if any
);

const store = createStore(reducer,enhancer)

sageMiddleware.run(sagaJs)

export default store