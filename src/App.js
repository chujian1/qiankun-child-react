import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return ( 
    // 添加路由的话 需要修改baseurl
    <Router basename='/react'>
      <Link to='/'>Home</Link>
      <Link to='/abort'>About</Link>
      <Route path='/' exact component={() => (<h1>Home</h1>)}>
      </Route>
      <Route path='/abort' component={() => (<h1>About</h1>)}>
      </Route>
    </Router>
  );
}

export default App;
