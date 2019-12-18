import React from 'react';
import SearchBar from './components/SearchBar'
import LeaveRecords from './components/LeaveRecords'
import store from './store/store'
import {getUserAction, getSchoolAction} from './store/actionCreator'

class App extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
    store.subscribe(this.handleStoreChange.bind(this))
    console.log(this.state)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  componentWillMount(){
    const userAction = getUserAction();
    store.dispatch(userAction)
    const schoolAction = getSchoolAction();
    store.dispatch(schoolAction)
  }
  render() {
    
    return (
      <div className="App" id="record">
        <div className="tab-content ">
          <SearchBar value={this.state.inputVal}></SearchBar>
          <LeaveRecords></LeaveRecords>
        </div>
      </div>
    );
  }

}

export default App;
