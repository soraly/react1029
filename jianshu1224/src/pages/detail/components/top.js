import React, { Component } from 'react'
import {connect} from 'react-redux'

class Top extends Component {
    render() {
        const {userInfo} = this.props;
        return (
            <div className="top">
                <h1>{userInfo.title}</h1>
                <div className="info">
                    <div className="avatar">
                        <img src={userInfo.avatar} alt=""/>
                    </div>
                    <div>
                        <div className="info-title">
                            <span>
                                <a href="">{userInfo.author}</a>
                            </span>
                            <a href=""></a>
                            <button>
                                <span>关注</span>
                            </button>
                        </div>
                        <div>
                            <span className="zhuanshi"><i className="iconfont">&#xe632;</i>15<span>15</span></span>
                            <time>2019.01.30 07:20:17</time>
                            <span>字数 452</span>
                            <span>阅读 1,338</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state)=>{
    return {
        userInfo: state.detail.userInfo
    }
}

export default connect(mapState)(Top)