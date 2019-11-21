import React from 'react'
import styles from './index.scss'
console.log(styles.gray,'styles')
class CommonTitle extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div  className='mb20 bottom-line'>
                <h2 className="font-size-24">
                {this.props.title}
                </h2>
            </div>
        )
    }
}

export {CommonTitle}
