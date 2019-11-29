import React from 'react';
import './index.css'
import TodoItem from './TodoItem'

class App extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.getTodoItem = this.getTodoItem.bind(this);
    this.state = {
      list: [ ],
      inputVal: ''
    }
  }
  handleInputChange(event) {
    const value = event.target.value;
    this.setState(() => ({ inputVal: value })); //传入函数表示异步
  }
  handleBtnClick() {
    this.setState((preState) => {
      const list = [...preState.list, preState.inputVal];
      return {
        list,
        inputVal: ''
      }
    })
  }
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }
  getTodoItem(){
    return this.state.list.map((item, index) => (
      <TodoItem
        deleteItem={this.handleItemDelete.bind(this)}
        key={index}
        index={index}
        item={item} />
    ))
  }
  render() {
    return (
      <div className='app'>
        请输入内容:{' '}
        <input
          onChange={this.handleInputChange}
          value={this.state.inputVal}
          type="text"
        />{' '} <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {this.getTodoItem()}
        </ul>
      </div>
    );
  }
}

export default App;