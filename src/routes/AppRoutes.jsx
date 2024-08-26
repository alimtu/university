// src/routes/routes.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const User = lazy(() => import('../pages/User.jsx'));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/*" element={<About />}></Route>
      <Route path="/user/:userId" element={<User />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
