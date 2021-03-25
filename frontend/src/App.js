import React from 'react';

import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Tech } from './components/Tech'
// import { FeaturedProjects } from './components/FeaturedProjects'
// import { ThoughtsCode } from './components/ThoughtsCode'
import { Skills } from './components/Skills'
// import { ForMore } from './components/ForMore'
// import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro/>
      <Tech />
      {/* <FeaturedProjects /> */}
      {/* <ThoughtsCode />' */}
      <Skills />
      {/* <ForMore /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
