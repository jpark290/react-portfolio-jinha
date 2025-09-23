/*
 * File: MainRouter.jsx
 * Purpose: Configures app routing (Home, About, Projects, Services, Contact).
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './components/Home'; 
import About from './about';
import Contact from './contact';
import Project from './project';
import Services from './services'; 

const MainRouter = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MainRouter;
