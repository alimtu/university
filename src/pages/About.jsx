// src/pages/About.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import OurTeam from './OurTeam';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <nav>
        <ul>
          <li>
            <Link to="team">Our Team</Link>
          </li>
          <li>
            <Link to="history">Our History</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="team" element={<OurTeam />} />
      </Routes>
    </div>
  );
};

export default About;
