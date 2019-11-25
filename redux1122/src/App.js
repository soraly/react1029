import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
  }
  handleClick() {
    this.props.store.dispatch({ type: 'addFood' })
  }
  handleClickNum() {
    this.props.store.dispatch({ type: 'addNum' })
  }
  incrementIfOdd() {
    const { value, onIncrement, onDecrement } = this.props;
    value % 2 !== 0 && onIncrement();
  }
  incrementAsync() {
    setTimeout(() => {
      this.props.onIncrement();
    }, 1500)
  }
  render() {
    const { value, onIncrement, onDecrement } = this.props
    console.log(onIncrement, 'onIncrement')
    return (
      <div>
        <h2>hello,{this.props.value}</h2>
        <button onClick={this.handleClick.bind(this)}>click me to add Food</button>
        <div>
          <p>
            Clicked: {value} times
        {' '}
            <button onClick={onIncrement}>
              +
        </button>
            {' '}
            <button onClick={onDecrement}>
              -
        </button>
            {' '}
            <button onClick={this.incrementIfOdd}>
              Increment if odd
        </button>
            {' '}
            <button onClick={this.incrementAsync}>
              Increment async
        </button>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
