import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import Header from '../../components/header'
import { Redirect } from 'react-router-dom'


class Write extends Component {
    componentDidMount() {

    }
    render() {
        if (this.props.isLogin) {
            return (
                <div>
                    <Header></Header>
                    <div className="write-container">
                        I want to write something.
                    </div>
                </div>
            )
        } else {
            return <Redirect to="login" />
        }
    }
}

const mapState = (state) => {
    return {
        isLogin: state.login.isLogin
    }
}

const mapDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapState, mapDispatch)(Write)