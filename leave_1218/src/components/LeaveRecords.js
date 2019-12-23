import React, { Component } from 'react'
import RecordItem from './recordItem'

export default class LeaveRecords extends Component {
    componentDidMount(){
        
    }
    getItems(){
        return this.props.list.map((item,index)=>{
            return <RecordItem key={index} item={item}></RecordItem>
        })
    }
    render() {
        return (
            <div>
                {this.getItems()}
            </div>
        )
    }
}
