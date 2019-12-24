import React from 'react'
import ListItem from '../listItem';
import {connect} from 'react-redux'

class List extends React.Component {
    render(){
        const listData = this.props.listData.map((item,index)=>{
            return <ListItem value={item} key={index} index={index}></ListItem>
        })
        return (
            <React.Fragment >
                <ul>
                    {listData}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    listData: state.listData
})

export default connect(mapStateToProps,null)(List)