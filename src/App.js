import logo from './logo.svg';
import React, { Suspense } from 'react';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import { RouterList } from './page/RouterList';
import Home from './page/home.js';
import './App.css';
// import { Router } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <Router>
        <Route key={'router'}
          path={'/'}
          component={Home}
        />
      </Router>
    </div>
  );
}

export default App;
