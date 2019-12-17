import React from 'react';
import SearchBar from './searchBar'
import List from './list'
import store from './store'

class App extends React.Component {
  constructor() {
    super();
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.state = store.getState();
    store.subscribe(this.handleStoreChange)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  render() {
    return (
      <div className="App" style={{ margin: '10px' }}>
      <div>my name is {this.state.name}</div>
        <SearchBar inputVal={this.state.inputVal}></SearchBar>
        <List list={this.state.listData}></List>
      </div>
    )
  }

}

export default App;
