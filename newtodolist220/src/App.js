import React from 'react';
import './App.css';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import NewsList from './components/List'
import Mytitle from './components/Title'
import Todo from './components/todoList'
import { BrowserRouter } from 'react-router-dom'

const { TabPane } = Tabs;

class App extends React.Component {
  constructor() {
    super();
  }
  callback() {

  }
  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Todolist" key="1">
              <Todo></Todo>
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
