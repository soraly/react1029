import React from 'react'

class TodoItem extends React.Component {
    handleDelete(index) {
        this.props.deleteItem && this.props.deleteItem(index)
    }
    render() {
        const { item, index } = this.props
        return (
            <React.Fragment>
                <li>
                    <span>{item}</span>{' '}
                    <a onClick={this.handleDelete.bind(this, index)} className="circle">X</a>
                </li>
            </React.Fragment>

        )
    }
}
export default TodoItem