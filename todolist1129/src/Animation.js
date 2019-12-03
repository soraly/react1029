import React from 'react'

class Animation extends React.Component {
    constructor() {
        super()
        this.toggleState = this.toggleState.bind(this)
        this.toggleStateByAnimation = this.toggleStateByAnimation.bind(this)
        this.state = {
            show: true
        }
    }
    toggleState() {
        this.setState({ show: this.state.show ? false : true })
    }
    toggleStateByAnimation(){
        this.setState({ show: this.state.show ? false : true })
    }
    render() {
        return (
            <React.Fragment>
                <div className={this.state.show ? 'show' : 'hide'} className={this.state.show ? 'show-animation' : 'hide-animation'}>HELLO,XIANG</div>
                <button onClick={this.toggleState}>toggle</button>
                <button onClick={this.toggleStateByAnimation}>toggleByAnimation</button>
            </React.Fragment>
        )
    }
}
export default Animation