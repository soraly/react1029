import React from 'react'
import '../index.scss'
class Bigone extends React.Component {
    render(){
        return (
            <div>
                <h2 className="font-size-16 mt10">这是一张大图开发(该图片&gt;10k,图片不转代码)</h2>
                <div className="bigImg"></div>
            </div>
        )
    }
}

export {Bigone}