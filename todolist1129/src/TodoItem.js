import React from 'react'
import PropTypes from 'prop-types'


class TodoItem extends React.Component {
    handleDelete(index) {
        this.props.deleteItem && this.props.deleteItem(index)
    }
    componentWillReceiveProps() { //当组件从父组件接收了参数，且组件已经存在于父组件时会执行
        console.log('item will receive')
    }
    // shouldComponentUpdate(){
    //     console.log('item should update?');
    //     return true
    // }
    // componentWillUpdate(){
    //     console.log('item will update..')
    // }
    componentWillUnmount(){
        console.log('item will unmount');
    }
    changeProps(index) {
        this.props.onChangeProps && this.props.onChangeProps(index)
    }
    render() {
        const { item, index, tip } = this.props
        return (
            <React.Fragment>
                <li>
                    <span onClick={this.changeProps.bind(this, index)}>{tip}{item}</span>{' '}
                    <a  onClick={this.handleDelete.bind(this, index)} className="circle">X</a>
                </li>
            </React.Fragment>
        )
    }
}

TodoItem.propTypes = {
    tip: PropTypes.string.isRequired,
    item: PropTypes.string,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    tip: '—'
}


export default TodoItem