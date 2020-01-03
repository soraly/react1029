import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../../store'
import {actions} from '../store'

class Topic extends Component {
    componentDidMount(){
        store.dispatch(actions.getTopicAction())
    }
    render() {
        const { topicList } = this.props;
        return (
            <div className="topic">
                <ul>
                    {
                        topicList.map((item) => (
                            <li key={item.id}>
                                <img src={item.url} alt="" />
                                <span>{item.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.home.topicList
})

export default connect(mapStateToProps)(Topic)