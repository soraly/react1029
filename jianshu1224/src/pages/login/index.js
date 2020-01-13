import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { actions } from './store'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            this.props.isLogin ? <Redirect to={{pathname: '/'}} /> :
                <div className="login-container">
                    <div className="logo">
                        <a href="/">
                            <img src="http://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="" />
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
                                    <i className="iconfont">&#xe64d;</i>
                                    <input className="tel" type="text" placeholder="手机号或邮箱" ref={input => this.phone = input} />
                                </div>
                                <div className="input-item">
                                    <i className="iconfont">&#xe608;</i>
                                    <input className="psd" type="password" placeholder="密码" ref={input => this.password = input} />
                                </div>
                                <div className="remember">
                                    <span>
                                        <input type="checkbox" />记住我
                                </span>
                                    <a href="">登录遇到问题？</a>
                                </div>
                                <div>
                                    <button className="login" onClick={(event) => { this.props.login(this.phone.value, this.password.value, event) }}>登录</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        login(phone, password, e) {
            e.preventDefault();
            dispatch(actions.login(phone, password));
        }
    }
}

const mapState = (state) => {
    return {
        isLogin: state.login.isLogin
    }
}

export default connect(mapState, mapDispatch)(Login)