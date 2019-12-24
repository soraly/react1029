import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Text extends Component {
    render() {
        return (
            <div>
                <h3>
                    {this.props.testVal}
                </h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    testVal: state.inputVal
})

export default connect(mapStateToProps,null)(Text)