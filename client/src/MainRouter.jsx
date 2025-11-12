/*
 * File: MainRouter.jsx
 * Purpose: App routing (public pages + auth + protected users list).
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './components/Home';
import About from './about';
import Contact from './contact';
import Project from './project';
import Services from './services';

import Signup from './components/Signup';
import Signin from './components/Signin';
import UserList from './components/UserList';
import ProtectedRoute from './components/ProtectedRoute';
import QualificationPage from './components/qualification';

const MainRouter = () => {
  return (
    <>
      <Layout />
      <Routes>
        {/* public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qualifications" element={<QualificationPage />} />

        {/* auth pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* protected pages */}
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />

        {/* optional: fallback to home or signin */}
        <Route path="*" element={<Signin />} />
        
      </Routes>
    </>
  );
};

export default MainRouter;
