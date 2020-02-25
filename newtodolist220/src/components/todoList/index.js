import React from 'react'
import store from '../../store'
import { Input, Button, Icon, List, message, Modal } from 'antd';
import { actions } from './store'


console.log(store.getState())

function Item(props) {
    return <div>
        <span style={{ cursor: 'pointer' }} onClick={e => props.onDataChange(e, props)}>{props.data}</span>
        {/* <input type="text"  value={props.data} onChange={(e) => props.onDataChange(e, props.index)} /> */}
        <Icon
            type="close-circle"
            onClick={() => props.onDelete(props.index)}
            style={{ cursor: 'pointer', marginLeft: '5px', verticalAlign: 'middle' }} />
    </div>
}

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = store.getState().todo;
        this.state.visable = false;
        this.state.isupdate = false;
        this.state.tempInputValue = '';
        this.state.tempInputIndex = null;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    componentDidMount() {
        const action = actions.getListAction();
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState().home);
    }
    handleInputChange(event) {
        this.setState({ inputVal: event.target.value });
    }
    handleDataChange(event, props) {
        this.setState({ isupdate: true, tempInputValue: props.data, tempInputIndex: props.index });
    }
    handleBtnClick() {
        if (this.state.inputVal) {
            store.dispatch({ type: 'ADD', value: this.state.inputVal });
        } else {
            message.warning('内容不能为空', 1)
        }
    }
    handleDelete(index) {
        const action = actions.getDeleteAction(index);
        store.dispatch(action);
    }

    handleClose = () => {
        console.log('close done..');
    }
    handleOk = () => {
        const action = actions.getUpdateAction({ index: this.state.tempInputIndex, value: this.state.tempInputValue });
        store.dispatch(action);
        this.setState({ isupdate: false })
    }
    handleCancel() {
        this.setState({ isupdate: false })
    }
    handleTempInput(e) {
        this.setState({ tempInputValue: e.target.value })
    }
    render() {
        return <React.Fragment>
            <Input style={{ width: "200px" }} onChange={this.handleInputChange} value={this.state.inputVal}></Input>
            <Button type='primary' onClick={this.handleBtnClick} style={{ marginLeft: 10 }}>提交</Button>
            <div style={{ width: '300px' }}>
                <List itemLayout="horizontal" dataSource={this.state.list} renderItem={(item, index) => <List.Item>
                    <Item data={item} key={item} index={index} onDelete={this.handleDelete} onDataChange={this.handleDataChange}></Item>
                </List.Item>}></List>
            </div>
            <Modal
                title="update modal"
                visible={this.state.isupdate}
                onOk={this.handleOk}
                onCancel={this.handleCancel.bind(this)}
            >
                <Input style={{ width: "200px" }} value={this.state.tempInputValue} onChange={this.handleTempInput.bind(this)} />
            </Modal>
        </React.Fragment>
    }
}