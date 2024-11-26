// src/components/Home.jsx

import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Home.css'; // Create this file for additional styles if needed

const Home = ({ children }) => {
  return (
    <div className="home-container">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
