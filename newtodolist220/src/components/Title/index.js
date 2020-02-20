import { Typography } from 'antd'
import React from 'react'
import { actions } from './store'
import store from '../../store'

const { Title } = Typography; 

export default class MyTitle  extends React.Component {
    constructor(){
        super();
        this.state = store.getState().title;
    }
    componentDidMount(){
        store.dispatch(actions.getTitleList(666));
    }
    render(){
        return (
            <div>
                {
                    this.state.titleList.map((item,index)=>(
                        <Title level={index+1} key={index}>{item}</Title>
                    ))
                }
                
            </div>
        )
    }
}