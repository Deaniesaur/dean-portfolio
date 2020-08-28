import React from 'react';
import logo from './logo.svg';
import './App.css';
import { title } from './components/title';

function App() {
  return (
    <div className="App" style={{backgroundColor:"pink"}}>
      <header className="App-header">
        {title}
      </header>
    </div>
  );
}

export default App;
