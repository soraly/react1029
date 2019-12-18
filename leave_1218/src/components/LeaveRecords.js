import React, { Component } from 'react'
import RecordItem from './recordItem'

export default class LeaveRecords extends Component {
    render() {
        const obj = {
            checkstatus: 1,
            teacherprocess: {}
          }
        return (
            <div>
                <RecordItem item={obj}></RecordItem>
            </div>
        )
    }
}
