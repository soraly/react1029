import React from 'react';
import Header from './components/header'
import Test from './components/TestRouter'
import store from './store'
import { Provider } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
        <Test></Test>
      </Provider>
    );
  }
}

export default App;
