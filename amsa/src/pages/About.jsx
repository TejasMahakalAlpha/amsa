import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page-wrapper">
      {/* Background Video */}
      <div className="about-video-wrapper">
        <video
          className="about-bg-video"
          src="/assets/home/hero2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="about-video-overlay"></div>
      </div>

      <section className="about-section">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Amsa Enterprise
        </motion.h2>

        <motion.p
          className="about-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Amsa Enterprise is a Pune-based software development company specializing in
          SAP technologies and enterprise-grade IT solutions. With clients across multiple
          industries and geographies, we’re known for our commitment to quality, innovation,
          and customer satisfaction.
        </motion.p>

        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src="/assets/home/home.jpg" alt="About Company" className="about-image" />
        </motion.div>

        <div className="about-boxes">
          <motion.div
            className="about-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3>Our Mission</h3>
            <p>
              To empower organizations through transformative IT solutions, driven by SAP and
              next-gen enterprise technologies.
            </p>
          </motion.div>

          <motion.div
            className="about-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3>Our Vision</h3>
            <p>
              To become a globally recognized partner for digital transformation through SAP
              and ERP innovation.
            </p>
          </motion.div>

          <motion.div
            className="about-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3>Our Values</h3>
            <ul>
              <li>Integrity – We build trust through transparency and ethics.</li>
              <li>Innovation – We embrace change and continuous improvement.</li>
              <li>Excellence – We aim for the highest standards in every project.</li>
              <li>Collaboration – We work as one team with clients and internally.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="journey"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Our Journey So Far</h3>
          <p>
            Founded in Pune, we have rapidly grown into a reliable SAP partner for businesses
            worldwide. Our team comprises certified developers, consultants, analysts, and
            creative minds committed to delivering excellence.
          </p>
        </motion.div>

        <motion.div
          className="future-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <h3>The Road Ahead</h3>
          <p>
            As we look to the future, Amsa Enterprise is investing in AI, machine learning, and cloud-native
            architectures to stay at the forefront of innovation. We envision a connected enterprise
            world where data drives decisions and automation powers excellence.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
