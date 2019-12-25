import React from 'react';
import Header from './components/header'
import store from './store'
import { Provider } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
      </Provider>
    );
  }
}

export default App;
