import React from 'react'

class Clock extends React.Component {
    constructor() {
        super()
        this.state = {
            time: new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    tick() {
        this.setState({ time: new Date() })
    }
    render() {
        return <div id="clock">现在时间是 {this.state.time.toLocaleTimeString()}</div>
    }
}

export { Clock }

//1. Clock被传递给ReactDom.render函数时，会先调用Clock的构造函数。因为Clock组件要显示时间，所以再state里定义个一个time变量。
//2. 然后React会调用组件的render方法。然后更新DOM
//3. 当Clock的输出被插入到DOM中时，会调用组件的componentDidMount方法。这里面每秒会调用一次tick。
//4. 浏览器每秒都会调用一次tick。tick方法使用setState来更新组件的状态，setState调用后react会自动调用一次render方法来更新DOM。
//5. 一旦Clock组件从DOM中移除时，react会调用componentWillUnmount方法