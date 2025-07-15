// src/pages/Services.jsx
import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="services-page-wrapper">
      {/* Background Video */}
      <div className="services-video-wrapper">
        <video autoPlay muted loop playsInline className="services-video">
          <source src="/assets/home/hero2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="services-video-overlay" />
      </div>

      <section className="services-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="services-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We provide a full spectrum of IT development and consulting services with a strong
          focus on SAP and ERP ecosystems. Our custom solutions are designed to optimize
          operations, improve workflows, and support your business growth.
        </motion.p>

        <div className="services-grid">
          {[
            {
              title: 'SAP Implementation & Customization',
              desc: 'Deploy, configure, and tailor SAP systems to meet the unique needs of your enterprise.',
            },
            {
              title: 'ERP Software Development',
              desc: 'Custom-built ERP applications to manage everything from finance and HR to inventory and sales.',
            },
            {
              title: 'System Integration & Support',
              desc: 'Achieve seamless system communication and enjoy round-the-clock technical support.',
            },
            {
              title: 'IT Strategy & Consulting',
              desc: 'Get expert advice on digital transformation, infrastructure upgrades, and smart technology adoption.',
            },
          ].map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="industries-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Industries We Serve</h2>
          <ul className="industries-list">
            <li>🏭 Manufacturing</li>
            <li>🛒 Retail & E-commerce</li>
            <li>🚚 Logistics & Supply Chain</li>
            <li>🏥 Healthcare</li>
            <li>🏛 Public Sector</li>
          </ul>
        </motion.div>

        <motion.a
          href="/contact"
          className="services-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Consultation
        </motion.a>
      </section>
    </div>
  );
};

export default Services;
