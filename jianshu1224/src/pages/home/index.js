import React, { Component } from 'react'
import Topic from './components/topic'
import MainList from './components/mainList'
import Recommend from './components/recommend'
import Writer from './components/writer'
import Qrcode from './components/qrcode'
import './style.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="leftWrapper">
                        <div className="banner">
                            <img src="https://upload.jianshu.io/admin_banners/web_images/4860/8aec44af6460ad75f6bb56caa9ab501c0cfb2ba4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                        </div>
                        <Topic></Topic>
                        <MainList></MainList>
                    </div>
                    <div className="rightWrapper">
                        <div>
                            <Recommend value={"简书会员"} bg={"#FFB84F"}></Recommend>
                            <Recommend value={"优选连载"} bg={"#F4E0BD"}></Recommend>
                            <Recommend value={"简书版权"} bg={"#C1E4DE"}></Recommend>
                            <Recommend value={"简书大学堂"} bg={"#B7D6EC"}></Recommend>
                        </div>
                        <Qrcode></Qrcode>
                        <Writer></Writer>
                    </div>
                </div>
            </div>
        )
    }
}
