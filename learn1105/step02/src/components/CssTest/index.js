import React from 'react'
import styles from './index.scss'
console.log(styles, 'styles')

class CssTest extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='mb20'>
                <button className={"center-center mb5 btnTest"} >
                    <i className="i-shoucang40 font-size-24 pr5" />
                    <span>button标签按钮带图</span>
                </button>
                <button className="text-overflow-1 block mb5 btnTest-small">
                    button小按钮
        </button>

        <a href="#" className="center-center block mb5 btnTest">
          <i className="i-shoucang40 main-color font-size-24 pr5" />a标签按钮带图标
        </a>

            </div>
        )
    }
}

export { CssTest }
