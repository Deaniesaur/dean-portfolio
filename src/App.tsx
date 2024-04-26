import React, { useState } from 'react';
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
import Header from './components/Header';
import themes from './styles/theme';

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  }
  return (
    <div className="App">
      <ThemeProvider theme={isDarkTheme ? themes.dark : themes.light } >
        <GlobalStyle />
        {/* <Routes>
          <Route path='/' element={<About />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/work' element={<Work />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes> */}
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
