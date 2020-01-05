import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Writer extends Component {
    render() {
        console.log(this.props.writerList)
        return (
            <div className="writer">
                <div className="info">
                    <span>推荐作者</span>
                    <a >换一批</a>
                </div>
                <div>
                    {this.props.writerList.map(item=>(
                        <div key={item.id} className="writer-item">
                        <a>
                            <img src={item.avatar_source} alt="" />
                        </a>
                        <span className="focus">+关注</span>
                        <div>
                            <p>
                                {item.nickname}
                            </p>
                    <span>写了{Math.round(item.total_wordage/1000*10)/10}k字，{Math.round(item.total_likes_count/1000*10)/10}k喜欢</span>
                        </div>
                        
                    </div>
                    ))}
                    
                </div>
            </div>
        )
    }
}

const mapState = (state)=>{
    return {
        writerList: state.home.writerList
    }
}

export default connect(mapState)(Writer)