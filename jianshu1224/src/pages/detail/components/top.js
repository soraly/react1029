import React, { Component } from 'react'

export default class Top extends Component {
    render() {
        return (
            <div className="top">
                <h1>智慧校园，成长档案，智慧班级，班级主页</h1>
                <div className="info">
                    <div className="avatar">
                        <img src="http://upload.jianshu.io/users/upload_avatars/8107105/9d7d7961-1fca-4c23-8196-45e779f5bd09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    </div>
                    <div>
                        <div className="info-title">
                            <span>
                                <a href="">一勺美食</a>
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
