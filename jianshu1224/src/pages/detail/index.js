import React, { Component } from 'react'
import './style.scss'
import Top from './components/top'
import Main from './components/main'
import { connect } from 'react-redux'
import { actions } from './store'
import Header from '../../components/header'


class Detail extends Component {
    componentDidMount() {
        this.props.getUserInfo(this.props.match.params.id);
        this.props.getDetailArticle(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div className="detail-container">
                    <div className="leftWrapper">
                        <Top></Top>
                        <Main></Main>
                    </div>
                    <div className="rightWrapper"></div>
                </div>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        getUserInfo(id) {
            dispatch(actions.userInfoAction(id));
        },
        getDetailArticle(id) {
            dispatch(actions.detailArticleAction(id));
        }
    }
}

export default connect(null, mapDispatch)(Detail)