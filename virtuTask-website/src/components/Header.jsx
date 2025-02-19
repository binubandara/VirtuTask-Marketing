import React, { useState } from 'react';
import ComingSoonModal from './ComingSoonModal';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/images/virtuTask.png"
              alt="VirtuTask Logo"
              className="me-2"
              width="40"
              height="40"
            />
            <span className="fw-bold text-dark">VirtuTask</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link px-3 fw-medium nav-link-hover" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-medium nav-link-hover" href="/features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-medium nav-link-hover" href="/why-us">Why Us</a>
              </li>
            </ul>
            
            <button 
              className="btn btn-primary px-4 fw-medium hover-effect"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Header;