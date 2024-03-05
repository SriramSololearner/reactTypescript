import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Instructor from './Pages/Instructor';
import Faq from './Pages/Faq';
import Skill from './Pages/Skill';
import { Rating } from '@mui/material';
import RelevantJobs from './Pages/RelevantJobs';
import Ratings from './Pages/Ratings';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Home />} />
          <Route path="/Instructor" element={<Instructor />} />
          <Route path="/FAQ's" element={<Faq />} />
          <Route path="/Skills" element={<Skill />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Rating" element={<Ratings />} />
          <Route path="/Relevant" element={<RelevantJobs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
