import React from 'react';
import SearchBar from './searchBar'
import List from './list'
import {connect} from 'react-redux'

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App" style={{ margin: '10px' }}>
      <div>my name is {this.props.name}</div>
        <SearchBar id={"003"}></SearchBar>
        <List></List>
      </div>
    )
  }

}

export default connect(state=>({name: state.name}),null)(App);
