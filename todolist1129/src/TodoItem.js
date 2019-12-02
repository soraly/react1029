import React from 'react'
import PropTypes from 'prop-types'


class TodoItem extends React.Component {
    handleDelete(index) {
        this.props.deleteItem && this.props.deleteItem(index)
    }
    render() {
        console.log('render')
        const { item, index,tip } = this.props
        return (
            <React.Fragment>
                <li>
                    <span>{tip}{item}</span>{' '}
                    <a onClick={this.handleDelete.bind(this, index)} className="circle">X</a>
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