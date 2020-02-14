import React from 'react';
import store from './store';
import './App.css';
import { Input, Button, Icon } from 'antd';
import 'antd/dist/antd.css';

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
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(()=>{
      this.handleStoreChange();
    })
  }
  componentDidMount(){
    
  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  handleInputChange(event) {
    this.setState({ inputVal: event.target.value });
  }
  handleBtnClick() {
    store.dispatch({type:'ADD',value: this.state.inputVal});
  }
  handleDelete(index) {
    var newList = JSON.parse(JSON.stringify(this.state.list));
    newList.splice(index, 1);
    this.setState({ list: newList })
  }
  render() {
    return (
      <div className="container">
        <Input style={{ width: "200px" }} onChange={this.handleInputChange} value={this.state.inputVal}></Input>
        <Button type='primary' onClick={this.handleBtnClick} style={{ marginLeft: 10 }}>提交</Button>
        <div>
          {this.state.list.map((item, index) => {
            return <Item data={item} key={item} index={index} onDelete={this.handleDelete}></Item>
          })}
        </div>
      </div>
    )
  }
}

export default App;
