import React from 'react';

class Add extends React.Component {
  constructor(){
    super();
  }
  componentDidMount(){
    console.log(this.props.onIncrement)
  }
  render(){
    return (
      <div>
        <span>total count is :{this.props.time}</span>{'   '}
        <button onClick={()=>this.props.onIncrement()}> + </button>{' '}
        <button onClick={()=>this.props.onDecrease()}> — </button>
      </div>
    )
  }
}

class HeroList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: '一年级' },
        { name: '三年级' },
        { name: '五年级' },
        { name: '初一' }
      ]
    }
  }
  render() {
    var { list } = this.state;
    return (
      <ul>
        {
          list.map((item, index) =>
            <li key={index}>我叫：{item.name}</li>)
        }
      </ul>
    )
  }
}
class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  tick() {
    this.setState({ count: this.state.count + Number(this.props.increment) })
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div style={{ color: this.props.myColor }}>过了 {this.state.count}秒</div>
    )
  }
}

function App(props) {
  return (
    <div className="App">
      <Add onIncrement={props.onIncrement} onDecrease={props.onDecrease} time={props.time}></Add>
      <h2>hello, world</h2>
      <HeroList />
      <Clock increment='1' myColor="red" />
    </div>
  );
}

export default App;
