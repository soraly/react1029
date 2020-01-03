import React, { Component } from 'react'

export default class Recommend extends Component {
    render() {
        return (
            <div className="recommend-item" style={{background: this.props.bg}}>
                <span>
                    {this.props.value}
                </span>
                <i>
                    >
                </i>
            </div>
        )
    }
}
