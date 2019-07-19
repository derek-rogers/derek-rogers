import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Content from './components/Content'

import './App.css'

class App extends React.Component {

  render() {
    return (<Router>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Router>
    );
  }
}

export default App
