import React, { useState } from 'react';
import ComingSoonModal from './ComingSoonModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card bg-white rounded-4 shadow-sm p-4">
      <div className="icon-wrapper bg-white rounded-3 shadow-sm p-3 mb-4">
        <img src={`/images/${icon}`} alt={title} className="feature-icon" width="24" height="24" />
      </div>
      <h3 className="h5 mb-3 fw-bold">{title}</h3>
      <p className="text-muted mb-0">{description}</p>
    </div>
  );
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: "pin.png",
      title: "Eliminate the biggest challenges of remote work",
      description: "Stay organized, maintain focus, and overcome distractions with AI-driven productivity tracking."
    },
    {
      icon: "rocket.png",
      title: "Supercharge productivity with AI-powered tracking",
      description: "Gain real-time insights into work patterns and optimize efficiency effortlessly."
    },
    {
      icon: "heart.png",
      title: "Prioritize well-being with built-in health and engagement tools",
      description: "Avoid burnout with wellness reminders, hydration alerts, and stress management features."
    },
    {
      icon: "chart.png",
      title: "Daily productivity reports for clear performance insights",
      description: "Receive automated daily reports summarizing tasks completed, time spent, and key performance trends."
    }
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container position-relative">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 text-white">
              <h1 className="display-3 fw-bold mb-4">
                Transform Remote Work. Elevate Productivity.
              </h1>
              <p className="lead mb-5">
                Say goodbye to isolation, burnout, and scattered workflows. Our platform 
                empowers remote teams to collaborate seamlessly, stay engaged, and thrive.
              </p>
              <div className="d-flex gap-3">
                <button 
                  className="btn btn-primary btn-lg px-4"
                  onClick={() => setIsModalOpen(true)}
                >
                  Start Your Free Trial
                </button>
                <button 
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => setIsModalOpen(true)}
                >
                  See It in Action
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="/images/hero.png" 
                alt="Platform interface preview" 
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <section className="features-section py-5">
        <div className="container">
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 mb-4">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-challenge-section py-5 position-relative overflow-hidden">
  {/* Top decorative wave */}
  <svg 
    className="position-absolute top-0 left-0 w-100" 
    style={{ opacity: 0.1 }}
    viewBox="0 0 1440 320" 
    preserveAspectRatio="none"
  >
    <path 
      fill="#046d48" 
      d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>

  {/* Bottom decorative wave */}
  <svg 
    className="position-absolute bottom-0 left-0 w-100" 
    style={{ opacity: 0.05}}
    viewBox="0 0 1440 320" 
    preserveAspectRatio="none"
  >
    <path 
      fill="#046d48" 
      d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>

  <div className="container position-relative">
    <div className="text-center mb-5">
      <h2 className="display-6 fw-bold mb-3">The Modern Work Challenge</h2>
      <p className="lead text-muted">
        Work has evolved. Whether you're remote, hybrid, or in-office, the way we stay productive has changed—yet most tools haven't caught up.
      </p>
    </div>
    
    <div className="row align-items-center">
      <div className="col-lg-6">
        <img 
          src="/images/stress.png" 
          alt="Work stress illustration" 
          className="img-fluid"
          style={{ maxWidth: '80%' }}
        />
      </div>
      <div className="col-lg-6">
        <div className="ps-lg-4">
          <div className="mb-4">
            <p className="mb-3">
              <span className="text-success me-">✅</span>
              <strong>Distractions Everywhere</strong> – Endless notifications, multitasking, and digital noise make it harder than ever to focus.
            </p>
            <p className="mb-3">
              <span className="text-success me-2">✅</span>
              <strong>Burnout is Real</strong> – Overworking without proper breaks leads to stress, fatigue, and reduced motivation.
            </p>
            <p className="mb-4">
              <span className="text-success me-2">✅</span>
              <strong>Lack of Engagement</strong> – Remote teams often struggle with collaboration, connection, and accountability.
            </p>
          </div>
          
          <div className="ps-4 mt-5 mb-4" style={{ borderLeft: '4px solid #046d48' }}>
            <p className="mb-3">
              That's why we built this platform—not just to help you get things done, but to <strong>make work feel effortless, engaging, and balanced.</strong> We combine <strong>smart task management, focus-driven productivity, and well-being tools</strong> to help you work <strong>smarter, not harder.</strong>
            </p>
            <p className="fst-italic mb-0">
              👉 It's time for a new way to work—one that works for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default HeroSection;