import React from 'react';
import SearchBar from './components/SearchBar'
import LeaveRecords from './components/LeaveRecords'
import store from './store/store'
import {getUserAction, getSchoolAction} from './store/actionCreator'

class App extends React.Component {
  constructor(){
    super();
    this.load = {
      teaAbsent: false,
      stuAbsent: false,
      list: false,
      type: false,
      flag: false
    };
    this.state = store.getState();
    store.subscribe(this.handleStoreChange.bind(this))
    console.log(this.state)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  componentDidMount(){
    window.IGrow = {};
    const userAction = getUserAction();
    store.dispatch(userAction)
    const schoolAction = getSchoolAction();
    store.dispatch(schoolAction)
    this.init();
  }
  init(){
    this.tabCheck('approval')
  }
  scrollLoad(){

  }
  tabCheck(action) {
    const $this = this;
    $this.actionType = action;
    $this.page = 1;
    $this.searchData = {
      teacherName: "",
      studentName: ""
    };
    switch (action) {
      case "approval":
        $this.load.teaAbsent = false;
        $this.teaAbsentList = [];
        //$this.teaAbsent();
        $this.scrollLoad(window, $this.teaAbsent, "teaAbsent");
        break;
      case "auditor":
        $this.load.stuAbsent = false;
        $this.stuAbsentList = [];
        $this.stuAbsent();
        $this.scrollLoad(window, $this.stuAbsent, "stuAbsent");
        break;
      case "myRecord":
        $this.load.list = false;
        $this.leaveList = [];
        $this.teaList();
        $this.scrollLoad(window, $this.teaList, "list");
        break;
    }
  }
  render() {
    
    return (
      <div className="App" id="record">
        <div className="tab-content ">
          <div>username: {this.state.user.username}</div>
          <SearchBar value={this.state.inputVal}></SearchBar>
          <LeaveRecords list={this.state.record.list}></LeaveRecords>
        </div>
      </div>
    );
  }

}

export default App;
