import React from 'react'
import { List } from 'antd'
import store from '../store';
import {getDeleteAction} from '../createActions'

class ListContent extends React.Component {
    constructor() {
        super()
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(index) {
        const action = getDeleteAction(index);
        store.dispatch(action);
    }
    render() {
        return (
            <List style={{ marginTop: 10, width: 400 }}
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => (
                    <List.Item>
                        {item}
                        <span
                            onClick={this.handleDelete.bind(this, index)}
                            style={{ float: 'right', cursor: 'pointer' }}
                        >X</span>
                    </List.Item>
                )}
            />
        )
    }
}

export default ListContent