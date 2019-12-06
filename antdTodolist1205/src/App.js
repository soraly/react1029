import React from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import ListCom from './components/List'
import store from './store';
import {SUBMIT,DELETE,CLEAR,CHANGE} from './actionTypes'

class App extends React.Component {
  componentDidMount() {
    //console.log(this.myInput.input)
  }
  constructor() {
    super()
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleInputChange(e) {
    store.dispatch({ type: CHANGE, value: e.target.value })
  }
  handleEnter() {
    store.dispatch({ type: SUBMIT });
    store.dispatch({ type: CLEAR });
  }
  handleBtnClick() {
    store.dispatch({ type: SUBMIT });
    store.dispatch({ type: CLEAR });
  }
  render() {
    return (
      <div className="App" style={{ margin: '10px' }}>
        <Input
          ref={(input) => { this.myInput = input }}
          style={{ width: 400, marginRight: 10 }}
          value={this.state.inputVal}
          onPressEnter={this.handleEnter}
          onChange={this.handleInputChange} />
        <Button
          type="primary"
          onClick={this.handleBtnClick} >submit</Button>
        <ListCom list={this.state.listContent} />
      </div>
    )
  }
}

export default App;
