import React from 'react';
import store from './store';
import './App.css';
import { Input, Button, Icon, Tabs, List, message } from 'antd';
import 'antd/dist/antd.css';
import * as actions from './store/actionCreator.js'
import NewsList from './components/List'
import Mytitle from './components/Title'
import { BrowserRouter, Link, Route } from 'react-router-dom'

const { TabPane } = Tabs;

function Item(props) {
  return <div>
    <input type="text"  value={props.data} onChange={(e) => props.onDataChange(e, props.index)} />
    <Icon
      type="close-circle"
      onClick={() => props.onDelete(props.index)}
      style={{ cursor: 'pointer', marginLeft: '5px', verticalAlign: 'middle' }} />
  </div>
}

class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState().home;
    this.state.visable = false;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange() {
    this.setState(store.getState().home);
  }
  handleInputChange(event) {
    this.setState({ inputVal: event.target.value });
  }
  handleDataChange(event, index) {
    const action = actions.getUpdateAction({ index, value: event.target.value });
    store.dispatch(action);
  }
  handleBtnClick() {
    if (this.state.inputVal) {
      store.dispatch({ type: 'ADD', value: this.state.inputVal });
    } else {
      message.warning('内容不能为空', 1)
    }
  }
  handleDelete(index) {
    const action = actions.getDeleteAction(index);
    store.dispatch(action);
  }
  callback() {

  }
  handleClose() {
    console.log('close done..')
  }
  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Todolist" key="1">
              <Input style={{ width: "200px" }} onChange={this.handleInputChange} value={this.state.inputVal}></Input>
              <Button type='primary' onClick={this.handleBtnClick} style={{ marginLeft: 10 }}>提交</Button>
              <div style={{ width: '300px' }}>
                <List itemLayout="horizontal" dataSource={this.state.list} renderItem={(item, index) => <List.Item>
                  <Item data={item} key={item} index={index} onDelete={this.handleDelete} onDataChange={this.handleDataChange}></Item>
                </List.Item>}></List>
              </div>
            </TabPane>
            <TabPane tab="LIST" key="2">
              <NewsList></NewsList>
            </TabPane>
            <TabPane tab="Title" key="3">
              <Mytitle />
            </TabPane>
          </Tabs>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
