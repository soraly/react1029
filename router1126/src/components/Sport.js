import React from 'react'
import { Link,Route,NavLink } from 'react-router-dom'

const Football = ()=> <div>let's go to play football</div>
const Running = ()=><div>1000m running is start in a short while</div>

const SportItem = ({match})=>{
    return <div>let's go to play {match.params.category}</div>
}

export default class Sport extends React.Component {
    componentDidMount() {
        console.log(this.props.match)
    }

    render() {
        return (
            <div>
                <h2>Hangzhou will hold on many sports in 2022 year</h2>
                <ul>
                    <li>
                        <NavLink to={this.props.match.url + '/football'}>football</NavLink>
                    </li>
                    <li>
                        <NavLink to={this.props.match.url + '/running'}>running</NavLink>
                    </li>
                    <li>
                        <NavLink to={this.props.match.url + '/basketball'}>basketball</NavLink>
                    </li>
                </ul>
                <div>
                    <Route path={this.props.match.url + '/:category'} component={SportItem}></Route>
                    {/* <Route path={this.props.match.url + '/running'} component={Running}></Route> */}
                </div>
            </div>
        )
    }
}