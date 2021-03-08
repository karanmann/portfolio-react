import React from 'react';
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ThisIsMe } from './components/ThisIsMe'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ThisIsMe />
    </div>
  );
}

export default App;
