import React from 'react';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { profile, skills, projects } from './data';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </div>
  );
}

export default App;