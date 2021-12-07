import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Intro from './views/Intro';
import Sparkie from './views/Sparkie';
import Board from './views/Board';
import About from './views/About';
import Contact from './views/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/main" element={<Main />} />
      <Route path="/sparkie" element={<Sparkie />} />
      <Route path="/board" element={<Board />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
