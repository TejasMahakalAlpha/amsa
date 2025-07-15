// src/pages/Career.jsx
import React from 'react';
import './Career.css';
import { motion } from 'framer-motion';

const Career = () => {
  const roles = [
    'SAP Developer',
    'Business Analyst (ERP domain)',
    'UI/UX Designer',
    'Project Coordinator',
    'Internship Program for IT Graduates',
  ];

  return (
    <div className="career-page-wrapper">
      {/* Background Video */}
      <div className="career-video-wrapper">
        <video autoPlay muted loop playsInline className="career-video">
          <source src="/assets/home/hero2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="career-video-overlay" />
      </div>

      <section className="career-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Career Opportunities
        </motion.h2>

        <motion.p
          className="career-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At Amsa Enterprise, we don’t just build software – we build careers. Join a team
          of passionate tech enthusiasts working on cutting-edge SAP technologies to solve
          real-world enterprise challenges.
        </motion.p>

        <div className="job-list">
          {roles.map((role, index) => (
            <motion.div
              className="job-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h3>{role}</h3>
              <p>We are hiring {role.toLowerCase()} to join our growing team.</p>
              <a href="/contact">Apply Now</a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="culture-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Why Work With Us?</h2>
          <ul className="culture-list">
            <li>🌿 Work-Life Balance & Flexibility</li>
            <li>🌍 Exposure to International Projects</li>
            <li>📚 Continuous Learning & Skill Development</li>
            <li>🤝 Inclusive, Transparent, and Collaborative Culture</li>
          </ul>
        </motion.div>

        <motion.a
          href="/contact"
          className="career-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Openings
        </motion.a>
      </section>
    </div>
  );
};

export default Career;
