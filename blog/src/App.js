import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Components/Header'
import Content from './Components/Content'

import './App.css'

function App() {
  return (<Router>
    <div className="App">
      <Header />
      <Content />
    </div>
  </Router>
  );
}

export default App
