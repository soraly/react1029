import React from 'react';
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/login" exact component={Login}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
