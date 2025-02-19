import React from 'react';
import { motion } from 'framer-motion';

const WhyUsSection = () => {
  const features = [
    {
      icon: "💡",
      title: "Productivity, Without the Burnout",
      description: "We don't believe in the \"grind\" culture. Instead, we help you work effectively with focus-enhancing tools, smart task management, and real-time insights—without the stress of micromanagement. Whether you're an individual looking to stay on top of your workload or a team leader keeping things organized, we provide the right balance between structure and flexibility."
    },
    {
      icon: "🧘",
      title: "Your Well-Being Matters",
      description: "You can't do your best work if you're exhausted. That's why we built in wellness reminders, hydration nudges, and posture checks—small, simple ways to take care of yourself while you work. Our platform encourages healthy breaks, mindful work habits, and a sustainable work-life balance."
    },
    {
      icon: "🌍",
      title: "Designed for a Global Workforce",
      description: "We know remote work isn't \"one-size-fits-all.\" With built-in time zone awareness, seamless collaboration tools, and engagement features that bring people together, we make working across time zones and cultures effortless."
    },
    {
      icon: "🎯",
      title: "More Than Just Work – Stay Engaged & Motivated",
      description: "We don't just help you complete tasks—we make work feel rewarding. With interactive engagement tools, micro-challenges, and a unique reward system, we bring a sense of fun, motivation, and connection to your daily routine."
    }
  ];

  return (
    <div className="overflow-hidden w-100">
      {/* Hero Section with Wave */}
      <section className="position-relative bg-success text-white py-5">
        <div className="container py-5">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-4 fw-bold mb-4">Why Choose Us?</h1>
            <h2 className="h3 fw-light mb-4">More Than Just Productivity – We Care About You.</h2>
          </motion.div>
        </div>
        <div className="wave-bottom position-absolute bottom-0 start-0 w-100">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" width="100%" height="120">
            <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="col-lg-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              >
                <div className="h-100 p-4 rounded-4 shadow-sm bg-white">
                  <div className="d-flex align-items-center mb-3">
                    <span className="fs-2 me-3">{feature.icon}</span>
                    <h3 className="h4 fw-bold mb-0">{feature.title}</h3>
                  </div>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="row justify-content-center mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="col-lg-8">
              <div className="p-4 bg-white text-center">
                <p className="lead fw-medium mb-0">
                  This is a platform built for people, not just productivity. If you're looking for a smarter way to work—one that values efficiency, well-being, and team spirit—you're in the right place.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsSection;