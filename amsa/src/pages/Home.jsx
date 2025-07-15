import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-page-wrapper">
      {/* Hero Section */}
      <section className="section hero-section">
        <div className="hero-video-container">
          <video autoPlay muted loop playsInline className="hero-bg-video">
            <source src="/assets/home/hero1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Empowering Digital Transformation</h1>
          <p>
            At Amsa Enterprise, we deliver high-performance SAP solutions tailored for every business.
            <br /> We bring innovation, scalability, and enterprise-grade intelligence to your IT ecosystem.
          </p>
          <a href="/contact" className="home-cta">Get in Touch</a>
        </motion.div>
      </section>

      {/* Photo Showcase */}
      <section className="section showcase-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/home/home.jpg"
            alt="Digital Enterprise"
            className="showcase-image"
          />
          <h2>Unleashing Digital Innovation</h2>
          <p>
            Alphaseam Enterprise helps global businesses become smarter, leaner, and future-ready. 
            Whether it's SAP implementation or scalable ERP strategies, our team empowers businesses to thrive in the digital era.
          </p>
        </motion.div>
      </section>

      {/* Core Offerings */}
      <section className="section offerings-section">
        <h2 className="section-title">Our Core Offerings</h2>
        <div className="offerings-grid">
          {[
            { title: 'SAP ERP Solutions', desc: 'Streamline business operations with scalable ERP systems.' },
            { title: 'Custom Software Development', desc: 'Build intelligent, efficient enterprise apps.' },
            { title: 'System Integration & Consulting', desc: 'Optimize IT infrastructure with expert guidance.' },
            { title: 'Cloud Migration Services', desc: 'Seamlessly transition to cloud with zero disruption.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="offering-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <h2 className="section-title">Why Alphaseam Enterprise?</h2>
        <ul className="why-list">
          {[
            '✔ Proven SAP Expertise',
            '✔ End-to-End IT Services',
            '✔ Global Project Experience',
            '✔ Agile & Customer-Centric Approach',
            '✔ 24/7 Support & Maintenance',
            '✔ Data-Driven Decision Making Tools',
          ].map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Industries */}
      <section className="section industries-section">
        <h2 className="section-title">Industries We Serve</h2>
        <div className="industry-tags">
          {[
            '🏭 Manufacturing',
            '🛒 Retail & E-commerce',
            '🚚 Logistics',
            '🏥 Healthcare',
            '🏛 Public Sector',
            '💼 Financial Services',
          ].map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <h2 className="section-title">Our Achievements</h2>
        <div className="stats-grid">
          {[
            { count: '50+', label: 'Enterprise Clients' },
            { count: '10+', label: 'Years Experience' },
            { count: '5+', label: 'Global Offices' },
            { count: '100%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="stat-box">
              <h3>{stat.count}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="section case-studies-section">
        <h2 className="section-title">Recent Projects</h2>
        <div className="case-study-grid">
          {[
            { title: 'Retail ERP Transformation', desc: 'Real-time inventory and sales analytics for a global retailer.' },
            { title: 'Healthcare SAP Deployment', desc: 'Improved data access and billing accuracy across branches.' },
            { title: 'Logistics Optimization', desc: 'Integrated fleet tracking and optimized route planning.' },
            { title: 'Smart Factory Integration', desc: 'IoT-based real-time monitoring integrated with SAP S/4HANA.' },
          ].map((project, i) => (
            <motion.div
              className="case-card"
              key={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
