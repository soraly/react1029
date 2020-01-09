import React, { Component } from 'react'
import './style.scss'
import Top from './components/top'
import Aside from './components/aside'
import Main from './components/main'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import {actions} from './store'

function Child() {
    return null
}

class Detail extends Component {
    componentDidMount() {
        this.props.getUserInfo()
    }
    render() {
        return (
            <div className="detail-container">
                <div className="leftWrapper">
                    <Top></Top>
                    <Main></Main>
                    <Child></Child>
                </div>
                <div className="rightWrapper"></div>
            </div>
        )
    }
}

const mapDispatch = (dispatch)=>{
    return {
        getUserInfo(){
            dispatch(actions.userInfoAction());
        }
    }
}

export default connect(null, mapDispatch)(Detail)