import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <img src="http://upload-images.jianshu.io/upload_images/13253432-c01746b073114ea1?imageMogr2/auto-orient/strip|imageView2/2/w/527/format/webp" alt="" />
                <p>在日常开发中多存在于使用<strong>if/for</strong>关键字结合let/const创建的块级作用域，<strong>值得注意的是使用let/const关键字声明变量的for循环和var声明的有些不同</strong></p>
                <p>for循环分为3部分，第一部分包含一个变量声明，第二部分包含一个循环的退出条件，第三部分包含每次循环最后要执行的表达式，也就是说第一部分在这个for循环中只会执行一次var i = 0，而后面的两个部分在每次循环的时候都会执行一遍</p>
            </div>
        )
    }
}
