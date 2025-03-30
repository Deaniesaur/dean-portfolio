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
import light from './styles/light';
import dark from './styles/dark';
import workdata from './data/workdata';
import educationdata from './data/educationdata';
import Education from './components/education';

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  }
  return (
    <div className="App">
      <ThemeProvider theme={isDarkTheme ? dark : light } >
        <GlobalStyle   />
        {/* <Routes>
          <Route path='/' element={<About />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/work' element={<Work />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes> */}
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        Hello!
        I'm Dean Pinlac,
        Web Developer.
        
        <div>
          <div>Work Experience</div>
          {workdata.map((work) => <Work key={work.id} work={work}/>)}
        </div>
        <div>
          <div>Education</div>
          {educationdata.map((education) => <Education key={education.id} education={education}/>)}
        </div>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
