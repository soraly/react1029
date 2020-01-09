import React from 'react';
import Header from './components/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
