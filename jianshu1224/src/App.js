import React from 'react';
import {HeaderWrapper} from  './style.js'
import logoSrc from './image/logo.png'

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <HeaderWrapper>
         <div className="width-limit">
           <a href="/" className="logo">
             <img src={logoSrc} alt=""/>
           </a>
           <a href="/write" className="btn write-btn">
             写文章
           </a>
           <a href="/btn" className="btn sign-up">
             注册
           </a>
         </div>
       </HeaderWrapper>
      </div>
    );
  }
}

export default App;
