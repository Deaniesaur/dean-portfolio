import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Work from './components/work';
import Experience from './components/experience';
import { GlobalStyle, theme } from './styles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ theme } >
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<About />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/work' element={<Work />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
