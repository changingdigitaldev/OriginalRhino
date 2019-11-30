import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() { 
  return (
    <React.Fragment> 
      <Header/>
      <Home/>
      <Footer/>
    </React.Fragment>
  );
}
