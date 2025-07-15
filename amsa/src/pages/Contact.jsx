// src/pages/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShowPopup(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 300);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="contact-page-wrapper">
      {/* Background Video */}
      <div className="contact-video-wrapper">
        <video autoPlay muted loop playsInline className="contact-video">
          <source src="/assets/home/hero2.mp4" type="video/mp4" />
        </video>
        <div className="contact-video-overlay" />
      </div>

      <section className="contact-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="contact-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We’re ready to help you accelerate your business through smart IT solutions. Whether
          you have a project in mind, a question about our services, or need expert consultation,
          we’d love to hear from you.
        </motion.p>

        <div className="contact-content">
          {/* Info */}
          <div className="contact-info">
            <h3>📍 Address</h3>
            <p>Pune, Maharashtra, India</p>

            <h3>📧 Email</h3>
            <p><a href="mailto:info@amsa.com">info@amsa.com</a></p>

            <h3>📞 Phone</h3>
            <p>0000000000</p>

            <a
              className="calendly-link"
              href="https://calendly.com/alphaseam-operations/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Book a Free Consultation
            </a>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Your Inquiry</button>
          </form>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="contact-popup-overlay" onClick={closePopup}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <h3>🎉 Thank You!</h3>
            <p>Your message has been received successfully. We will get back to you soon!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
