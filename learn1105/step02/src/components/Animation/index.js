import React from 'react'
import "./index.scss"
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Animation extends React.Component {
    state = {
        show: false,
        hrstyle: { height: '2px' },
        items: [
            {
                id: 1,
                name: 'react'
            },
            {
                id: 2,
                name: 'react-router'
            },
            {
                id: 3,
                name: 'redux'
            },
            {
                id: 4,
                name: 'es2016'
            }
        ]
    };
    addItem() {
        let saySomething = prompt('随便填点什么吧');
        if (saySomething) {
            var arr = this.state.items.concat({ id: this.state.items.length + 1, name: saySomething })
            this.setState({ items: arr })
        } else {
            alert('不能啥都不写啊')
        }

    }
    handleDelete(id) {
        console.log(id,'id')
        this.setState({ items: this.state.items.filter(item=>item.id !== id ) })
    }
    switchState() {
        this.setState({ show: !this.state.show })
    }
    onenter() {
        console.log('enter..')
    }
    onexited() {
        console.log('onExited..')
    }
    render() {
        return (
            <div className="flex-center">
                <button className="center-center mb5 btnTest" onClick={this.addItem.bind(this)}>点击添加</button>
                <button className="center-center mb5 btnTest" onClick={this.switchState.bind(this)}>点击切换</button>
                <CSSTransition in={this.state.show} timeout={200} classNames="my-node" unmountOnExit
                    onEnter={this.onenter}
                    onExited={this.onexited}>
                    <ul className="flex-ul">
                        {this.state.items.map((item, index) => (<li onClick={this.handleDelete.bind(this, item.id)} key={item.id}>{item.name}</li>))}
                    </ul>
                </CSSTransition>
                <div style={{ marginBottom: '10px', width: '100%', height: '10px', background: '#ddd' }}></div>

                <ul className="flex-ul">
                    <TransitionGroup className="todo-list">
                        {this.state.items.map((item, index) => (
                            <CSSTransition key={index}
                                timeout={500}
                                classNames="item">
                                <li onClick={this.handleDelete.bind(this, item.id)} key={item.id}>{item.name}</li>
                            </CSSTransition>

                        ))}
                    </TransitionGroup>

                </ul>
            </div>
        )
    }
}

export { Animation }
