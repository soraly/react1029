import React from 'react'
import ListItem from '../listItem';

class List extends React.Component {
    render(){
        const listData = this.props.list.map((item,index)=>{
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
export default List