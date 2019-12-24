import React from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { getInputChangeAction, getSubmitAction, getListData, getUserInfo, userInfoRequestAction } from '../createActions'
import { connect } from 'react-redux'
import Test from './test'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // const action = getListData();
        // store.dispatch(action);
        // const user_action= getUserInfo();
        // store.dispatch(user_action);
        // const action2 = userInfoRequestAction();
        // store.dispatch(action2)
    }
    render() {
        const {inputVal, getSubmitAction, getInputChangeAction} = this.props;
        return (
            <React.Fragment>
                <Input value={inputVal} onChange={(e) => getInputChangeAction(e.target.value)} style={{ width: 200 }} placeholder="请输入待办事项"></Input> {' '}
                <Button type="primary" onClick={getSubmitAction}>提交</Button>
                <Test></Test>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps,'ownProps')
    return {
        inputVal: state.inputVal,
    }
}

const mapDispatchToProps = {
    getSubmitAction,
    getInputChangeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)