import React from 'react';

import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Tech } from './components/Tech'
import { Projects } from './components/projects/Projects'
import { ThoughtsCode } from './components/ThoughtsCode'
import { Skills } from './components/Skills'
import { ForMore } from './components/ForMore'
import { Footer } from './components/Footer'
import { Data } from './projects'

const projectData = Data.projects

console.log(projectData)

function App() {
  return (
    <div className="App">
      <Header />
      <Intro/>
      <Tech />
      <Projects projectData={projectData}/>
      <ThoughtsCode />'
      <Skills />
      <ForMore />
      <Footer />
    </div>
  );
}

export default App;
