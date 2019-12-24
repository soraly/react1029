import React, { Component } from 'react'
import { Icon } from 'antd'
import {getDeleteAction} from '../createActions'
import {connect} from 'react-redux'

const contexa = React.createContext();
const contexb = React.createContext();
console.log(contexa==contexb,'aa')

 class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.value} <Icon onClick={this.props.getDeleteAction.bind(this, this.props.index)} id="icon" type="close-circle" />
            </li>
        )
    }
}

const mapDispatchToProps = {
    getDeleteAction
}

export default connect(null,mapDispatchToProps)(ListItem)
