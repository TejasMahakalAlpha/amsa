// src/pages/Blog.jsx
import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Why SAP is Essential for Modern Businesses',
    description: 'Explore how SAP enables real-time decision-making and streamlined operations across enterprises.',
  },
  {
    title: 'Digital Transformation in 2025: What to Expect',
    description: 'Stay ahead with future-forward strategies that redefine enterprise agility and scalability.',
  },
  {
    title: 'Top 5 Challenges in ERP Implementation (And How to Overcome Them)',
    description: 'Learn how to avoid common pitfalls and ensure a successful ERP rollout.',
  },
];

const Blog = () => {
  return (
    <div className="blog-page-wrapper">
      {/* Background Video */}
      <div className="blog-video-wrapper">
        <video autoPlay muted loop playsInline className="blog-video">
          <source src="/assets/home/hero2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="blog-video-overlay" />
      </div>

      <section className="blog-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tech Insights & SAP Trends
        </motion.h2>

        <motion.p
          className="blog-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Stay ahead of the curve with expert-written articles and thought leadership on all things enterprise IT.
          From SAP trends to real-world case studies, our blog is a hub for business leaders, IT professionals,
          and digital strategists.
        </motion.p>

        <div className="blog-categories">
          <span>SAP</span>
          <span>ERP</span>
          <span>Digital Strategy</span>
          <span>Project Management</span>
          <span>Enterprise IT</span>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div
              className="blog-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href="/contact">Read More</a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="blog-cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Want to contribute or stay updated?</h3>
          <div className="blog-buttons">
            <a href="/contact" className="blog-btn">Subscribe Now</a>
            <a href="/contact" className="blog-btn alt">Write for Us</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
