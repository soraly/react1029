import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Main extends Component {
    render() {
        return (
            <div className="main" dangerouslySetInnerHTML={{__html: this.props.detailHtml}}>
                
            </div>
        )
    }
}

const mapState = (state)=>({
    detailHtml: state.detail.articleHtml
})

export default connect(mapState)(Main)
