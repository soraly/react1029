import React from 'react';
import { HeaderWrapper, NavItem, Input, BtnItem, SearchWrapper, HotSearch } from './style.js'
import logoSrc from '../../image/logo.png'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actions } from './store'
import { Link } from 'react-router-dom'

//是不是应该把应用的所有状态都交给redux来处理？
// 对于那些不会影响app全局的短暂状态（我认为即大部分UI状态）使用React的方式去处理，并不需要用复杂的方式去实现。
// 例如，一个是某些UI元素的toggle，一个位于表单中的input输入框。而需要使用redux处理的是那些会影响到全局的state或者它会在某些方式上产生剧烈的变化 

function Login() {
    return (
        <Link to="/login">
            <NavItem className="right">登录</NavItem>
            </Link>
    )
}

class Header extends React.Component {
    constructor() {
        super();
        this.getSearchList = this.getSearchList.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.state = {
            hrefVal: '/',
            mouseIn: false
        }
    }
    handleMouseEnter() {
        this.setState({ mouseIn: true });
    }
    handleMouseOut() {
        this.setState({ mouseIn: false });
    }
    getSearchList() {
        return this.props.focused || this.state.mouseIn ?
            <HotSearch onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseOut}>
                <div className="title">
                    热门搜索
                    <span>换一批</span>
                </div>
                <ul>
                    {this.props.searchList.map((item, key) => {
                        return <li key={key}><a href={this.state.hrefVal}>{item}</a></li>
                    })}
                </ul>
            </HotSearch>
            : null
    }
    render() {
        const props = this.props;
        const { focused } = props;
        return (<HeaderWrapper>
            <div className="width-limit">
                <a href="/" className="logo">
                    <img src={logoSrc} alt="" />
                </a>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <CSSTransition classNames="slider" in={focused} timeout={200}>
                    <SearchWrapper>
                        <Input className={focused ? 'focused' : ''} onFocus={props.handleInputFocus.bind(this, this.props.searchList)} onBlur={props.handleInputBlur}></Input>
                        <span className={`iconfont ${focused ? 'focused' : ''}`}>&#xe6e4;</span>
                        {
                            this.getSearchList()
                        }
                    </SearchWrapper>
                </CSSTransition>

                <BtnItem className="write-btn">
                    <span className="iconfont">&#xe616;</span>
                    写文章</BtnItem>
                <CSSTransition classNames="item" in={focused} timeout={200}>
                    <BtnItem className="sign-up">注册</BtnItem>
                </CSSTransition>
                <Login></Login>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
            </div>
        </HeaderWrapper> )


    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.head.focused, //如果写成immutable，就是state.getIn(['head','focused'])，太麻烦。。。
        searchList: state.head.searchList
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleInputFocus(list) {
        dispatch(actions.getInputFocusAction());
        !list.length && dispatch(actions.getListData(list));
    },
    handleInputBlur() {
        dispatch(actions.getInputBlurAction());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
