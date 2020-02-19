import React from 'react';
import store from './store';
import './App.css';
import { Input, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import * as actions from './store/actionCreator.js'
import NewsList from './components/List'
import Mytitle from './components/Title'

function Item(props) {
  return <div>{props.data}
    <Icon
      type="close-circle"
      onClick={() => props.onDelete(props.index)}
      style={{ cursor: 'pointer' }} />
  </div>
}

class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState().home;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange(){
    this.setState(store.getState().home);
  }
  handleInputChange(event) {
    this.setState({ inputVal: event.target.value });
  }
  handleBtnClick() {
    store.dispatch({type:'ADD',value: this.state.inputVal});
  }
  handleDelete(index) {
    const action = actions.getDeleteAction(index);
    store.dispatch(action);
  }
  render() {
    return (
      <div className="container">
        {/* next: 增加编辑和查找功能*/}
        <Input style={{ width: "200px" }} onChange={this.handleInputChange} value={this.state.inputVal}></Input>
        <Button type='primary' onClick={this.handleBtnClick} style={{ marginLeft: 10 }}>提交</Button>
        <div>
          {this.state.list.map((item, index) => {
            return <Item data={item} key={item} index={index} onDelete={this.handleDelete}></Item>
          })}
        </div>
        <NewsList></NewsList>
        <Mytitle />
      </div>
    )
  }
}

export default App;
