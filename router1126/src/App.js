import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Food from './components/Food'
import News from './components/news'
import Sport from './components/Sport'
import Empty from './components/Empty'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/food">show foods</Link>
        </li>
        <li>
          <Link to="/sport">show sports</Link>
        </li>
        <li>
          <Link to="/news">show news</Link>
        </li>
      </ul>
      <Switch>
        {/* exact 表示绝对匹配改路径，不包括子路经 */}
        <Route path='/sport' component={Sport}></Route>
        <Route path='/food' component={Food}></Route>
        <Route path='/news' component={News}></Route>
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={Empty}></Route>
      </Switch>

    </div>
  );
}

export default App;
