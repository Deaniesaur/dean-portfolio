import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/container/Container';
import Banner from './components/banner/Banner';
import Body from './components/body/Body';

function App() {
  return (
    // <div className="App" style={{backgroundColor:"black"}}>
    //   <header className="App-header">
    //     {title}
    //   </header>
    // </div>
    <div className="App">
      <div>
        <Banner />
      </div>
      <Body />
    </div>
  );
}

export default App;
