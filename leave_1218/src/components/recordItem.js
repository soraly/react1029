import React, { Component } from 'react'

export default class recordItem extends Component {
    constructor() {
        super()
        this.randomNum = Math.random();
        this.teaAbsentStatus = {
            0: "审核中",
            1: "批准",
            2: "未批准"
        }
    }
    render() {
        const { item } = this.props
        return (
            <div className="list-item clearfix">
                {this.randomNum > 5 ? <span class="read-tip"></span> : ''}
                <span className={`apply-tip pull-right ${item.checkstatus === 1 ? "font-active" : ''} 
                ${item.checkstatus === 0 ? "font-tip" : ''} ${item.checkstatus === 2 ? "font-no-check" : ''}`}>
                    {this.teaAbsentStatus[item.checkstatus]}
                </span>
                <a >
                    <p>
                        <span>请假人：</span>
                        <span>{item.teacher ? item.teacher.name : ''}</span>
                    </p>
                    <p>
                        <span>请假类型：</span>
                        <span>{item.type ? item.type.name : ''}</span>
                    </p>
                    <p>
                        <span>日期：</span>
                        <span>{item.leaveDate}</span>
                    </p>
                    <p>
                        <span>请假说明：</span>
                        <span>{item.notes}</span>
                    </p>
                </a>
                {item.checkControl ?
                    <div class="check-control" >
                        <button href="javascript:;">同意</button>
                        <button href="javascript:;">不同意</button>
                    </div>
                    : null}
                {item.teacherprocess.notes ?
                    <div class="check-notes" >
                        <span>回复：</span>{item.teacherprocess.notes}
                    </div>
                    : null
                }
            </div>
        )
    }
}
