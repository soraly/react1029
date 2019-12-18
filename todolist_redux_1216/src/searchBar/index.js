import React from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from '../store'
import { getInputChangeAction, getSubmitAction, getListData, getUserInfo,userInfoRequestAction } from '../createActions'
import axios from 'axios'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }
    componentDidMount() {
        const action = getListData();
        store.dispatch(action);
        const user_action= getUserInfo();
        store.dispatch(user_action);
        const action2 = userInfoRequestAction();
        store.dispatch(action2)
        
    }
    handleInputChange(event) {
        const action = getInputChangeAction(event.target.value);
        store.dispatch(action);
    }
    handleBtnClick() {
        const action = getSubmitAction();
        store.dispatch(action);
    }
    render() {
        return (
            <React.Fragment>
                <Input value={this.props.inputVal} onChange={this.handleInputChange} style={{ width: 200 }} placeholder="请输入待办事项"></Input> {' '}
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
            </React.Fragment>
        )
    }
}
export default SearchBar