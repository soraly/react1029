import React, { Component } from 'react'
import {getInputChangeAction} from '../store/actionCreator'
import store from '../store/store';
console.log(store.getState(),'state')
export default class SearchBar extends Component {
    handleInputChange(event){
        const action = getInputChangeAction(event.target.value);
        store.dispatch(action)
    }
    handleBtnClick(){
        
    }
    render() {
        return (
            <div className="mail-search">
                <i className="iconfont icon-hunt"></i>
                <input type="text" value={this.props.value} onChange={this.handleInputChange.bind(this)} placeholder="请输入教师姓名" />
                <div className="btn btn-lg btn-block" onClick={this.handleBtnClick}>搜索</div>
            </div>
        )
    }
}
