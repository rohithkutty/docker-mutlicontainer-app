import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          Hello Rohith
        </header>
        <Route exact path='/' component={Fib} />
        <Route exact path='/other-page' component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
