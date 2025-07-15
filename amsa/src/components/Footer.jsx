// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>AMSA Enterprise</h3>
        <p>Empowering digital transformation through SAP & IT innovation.</p>

        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} AMSA Enterprise. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
