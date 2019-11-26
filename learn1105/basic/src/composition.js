import React from 'react'

class CommonForm extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Formcontainer color={'gray'}>
                <h2>{this.props.title}</h2>
                <div className="control">
                    <label htmlFor="username">username:</label>
                    <input type="text" id="username" />
                </div>
                <div className="control">
                    <label htmlFor="age">age:</label>
                    <input type="text" id="age" />
                </div>
                {this.props.children}
            </Formcontainer>
        )
    }
}

function Formcontainer(props) {
    return <form className={'form form-' + props.color}>{props.children}</form>
}

export default CommonForm