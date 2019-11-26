import React from 'react';
import CommonForm from './composition'

class MyForm extends React.Component {
  constructor() {
    super()
    this.state = {
      selectVal: 'sh'
    }
  }
  handleSelect(event){
    console.log(event.target.value);
    this.setState({selectVal: event.target.value})
  }
  render() {
    return (
      <CommonForm title="this is lzx form">
        <div className="control">
          <label htmlFor="">choose a file:</label>
          <input type="file" name="upload" />
        </div>
        <div className="control">
          <label htmlFor="">select a name:</label>
          <select name="" id="" value={this.state.selectVal} onChange={this.handleSelect.bind(this)}>
            <option value="hz">HangZhou</option>
            <option value="sh">ShangHai</option>
            <option value="bj">BeiJing</option>
          </select>
        </div>
      </CommonForm>

    )
  }
}


class Hero extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h2>hello,this is heros:</h2>
        {this.props.children}
        <h3>best:</h3>
        <ul>
          {this.props.best}
        </ul>
      </div>
    )
  }
}

class Add extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log(this.props.onIncrement)
  }
  render() {
    return (
      <div>
        <span>total count is :{this.props.time}</span>{'   '}
        <button onClick={() => this.props.onIncrement()}> + </button>{' '}
        <button onClick={() => this.props.onDecrease()}> — </button>
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

function Bruce() {
  return <li>i am Bruce</li>
}
function App(props) {
  var heros = ['spiderman', 'superman', 'X', 'robot']
  return (
    <div className="App">
      <Add onIncrement={props.onIncrement} onDecrease={props.onDecrease} time={props.time}></Add>
      <h2>hello, world</h2>
      <HeroList />
      <Clock increment='1' myColor="red" />
      <Hero best={<Bruce />}>
        <ul>
          {heros.map((hero, index) => <li key={index}>{hero}</li>)}
        </ul>
      </Hero>
      <MyForm/>
    </div>
  );
}

export default App;
