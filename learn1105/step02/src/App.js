import React from 'react';
import './App.scss';
import './styles/app.scss';
import { Animation, CssTest,BigComponent,CommonTitle } from './components'

function App() {
  return (
    <div className="box">
      <CommonTitle title="一个简单的按钮mixin示例" />
      <CssTest></CssTest>
      <BigComponent />
      <CommonTitle title="Animation示例，点击列表删除" />
      <Animation></Animation>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
