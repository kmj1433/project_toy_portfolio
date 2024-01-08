import React from 'react'

import './App.css';
import './assets/css/style.module.css'

import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <app>
      <Header />
      <Home />
      <About />
      <Footer />
    </app>
  );
}

export default App;
