import React from 'react'
import '../index.scss'
class Smallone extends React.Component {
    render(){
        return (
            <div>
                <h2 className="font-size-16 mt10">这是一张小图开发(该图片,图片转代码)</h2>
                <div className="smallImg"></div>
            </div>
        )
    }
}

export {Smallone}