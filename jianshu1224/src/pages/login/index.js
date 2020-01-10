import React, { Component } from 'react'
import './style.scss'

export default class login extends Component {
    render() {
        console.log(this.props.match,'props')
        return (
            <div className="login-container">
                <div className="logo">
                    <a href="/">
                        <img src="http://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
                    </a>
                </div>
                <div className="main">
                    <h4 className="title">
                        <a href="" className="active">登录</a>
                        <b>.</b>
                        <a href="">注册</a>
                    </h4>
                    <div>
                        <form action="">
                            <div className="input-item">
                                <i></i>
                                <input className="tel" type="text" placeholder="手机号或邮箱" />
                            </div>
                            <div className="input-item">
                                <i></i>
                                <input className="psd"  type="text" placeholder="密码" />
                            </div>
                            <div className="remember">
                                <span>
                                    <input type="checkbox"/>记住我
                                </span>
                                    <a href="">登录遇到问题？</a>
                            </div>
                            <div>
                                <button className="login">登录</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
