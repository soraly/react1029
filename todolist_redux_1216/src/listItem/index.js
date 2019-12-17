import React, { Component } from 'react'
import { Icon } from 'antd'
import store from '../store'
import {getDeleteAction} from '../createActions'

export default class ListItem extends Component {
    handleIconClick() {
        const action = getDeleteAction(this.props.index)
        store.dispatch(action)
    }
    render() {
        return (
            <li>
                {this.props.value} <Icon onClick={this.handleIconClick.bind(this, this.props.index)} id="icon" type="close-circle" />
            </li>
        )
    }
}
