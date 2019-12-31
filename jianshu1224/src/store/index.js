import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

//自定义middleware
const myMiddleware = (store) => (next) => (action) => {
	// 对action数据进行操作
    // 返回action对象
    action.name = "passed by xiang";;
	next(action)
}

function createThunkMiddleware(extraArgument) {
    return function (_ref) {
      var dispatch = _ref.dispatch,
          getState = _ref.getState;
      return function (next) {
        return function (action) {
          if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
          }
           next(action);
        };
      };
    };
  }
   
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(createThunkMiddleware(), myMiddleware),
    // other store enhancers if any
);
const store = createStore(reducer, enhancer);


export default store