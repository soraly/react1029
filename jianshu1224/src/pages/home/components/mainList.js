import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../../store'
import { actions } from '../store'

class mainList extends Component {
    componentDidMount() {
        store.dispatch(actions.getMainListAction())
    }
    render() {
        const { mainList } = this.props;
        return (
            <div>
                {mainList.map(item => (
                    <div className="mainList" key={item.id}>
                        <img src={item.url} alt="" />
                        <div className="desc">
                            <h2>{item.title}</h2>
                            <p>
                                01 知乎有个热门问题：二本学校的学生想考研到211、985学校现实吗？ 恰逢大三的学弟学妹抉择考研之际，写下这篇文章，或解惑，或激励。 我，本...
                    </p>
                        </div>
                    </div>
                ))}


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mainList: state.home.mainList
    }
}

export default connect(mapStateToProps)(mainList)
