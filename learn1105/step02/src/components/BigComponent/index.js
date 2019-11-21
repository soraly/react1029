import React from 'react'
import {Bigone} from './bigone'
import {Smallone} from './smallone'
class BigComponent extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <Bigone/>
            <Smallone/>
            </div>
        )
    }
}

export {BigComponent}
