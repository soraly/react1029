import React from 'react';
import './index.css'
import TodoItem from './TodoItem'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      inputVal: '',
      tip: '请输入内容：'
    }
  }
  componentWillMount() {
    console.log('will mount')
  }
  componentWillReceiveProps(){
    console.log('will receive')
  }
  componentDidMount() {
    this.myInput.focus();
  }
  shouldComponentUpdate(){
    console.log('APP should update?');
    return true
}

componentWillUpdate(){
    console.log('APP will update..')
}
componentDidUpdate(){
  console.log('APP did update');
}
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState(() => ({ inputVal: value })); //传入函数表示异步
  }
  handleBtnClick = () => {
    this.setState((preState) => {
      const list = [...preState.list, preState.inputVal];
      return {
        list,
        inputVal: '',
      }
    },()=>{
      //因为setState里的函数是异步更新的，所以要在异步函数结束后的回调里才能正确输出li的长度
      console.log(this.myUl.querySelectorAll('li').length,'li length')
    })
  }
  onChangeProps = index=>{
    const list = [...this.state.list];
    list[index] =  list[index]+ list[index];
    this.setState({list})
  }
  handleItemDelete = (index) => {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }
  getTodoItem = () => {
    return this.state.list.map((item, index) => (
      <TodoItem
        ref={todo=>this.todo = todo}
        deleteItem={this.handleItemDelete.bind(this)}
        onChangeProps = {this.onChangeProps.bind(this)}
        key={index}
        index={index}
        item={item} />
    ))
  }
  render() {
    console.log('app render');
    const { inputVal } = this.state;
    return (
      <div className='app'>
        {this.state.tip}{' '}
        <input
          ref={input=>this.myInput = input}
          onChange={this.handleInputChange}
          value={inputVal}
          type="text"
        />{' '} <button onClick={this.handleBtnClick}>提交</button>
        <ul ref={ul=>this.myUl = ul}>
          {this.getTodoItem()}
        </ul>
      </div>
    );
  }
}


export default App;
