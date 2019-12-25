import React from 'react';
import { HeaderWrapper, NavItem, Input, BtnItem } from './style.js'
import logoSrc from '../../image/logo.png'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import {actions} from './store'

//无状态组件，性能较高
function Header(props) {
    return (
        <HeaderWrapper>
            <div className="width-limit">
                <a href="/" className="logo">
                    <img src={logoSrc} alt="" />
                </a>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <CSSTransition classNames="slider" in={props.focused} timeout={200}>
                    <Input className={props.focused ? 'focused' : ''} onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}></Input>
                </CSSTransition>
                <span className={`iconfont ${props.focused ? 'focused' : ''}`}>&#xe6e4;</span>
                <BtnItem className="write-btn">
                    <span className="iconfont">&#xe616;</span>
                    写文章</BtnItem>
                <CSSTransition classNames="item" in={props.focused} timeout={200}>
                    <BtnItem className="sign-up">注册</BtnItem>
                </CSSTransition>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem> 
            </div>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.head.focused //如果写成immutable，就是state.getIn(['head','focused'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleInputFocus() {
        dispatch(actions.getInputFocusAction()); 
    },
    handleInputBlur() {
        dispatch(actions.getInputBlurAction());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
