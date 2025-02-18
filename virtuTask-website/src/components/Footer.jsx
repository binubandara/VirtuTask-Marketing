import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Left Section - Branding */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/images/virtuTask.png"
                alt="VirtuTask Logo"
                className="me-2"
                width="40"
                height="40"
              />
              <span className="fw-bold fs-4">VirtuTask</span>
            </div>
            <p className="mb-4 text-light">
              Work smarter. Stay motivated. Feel good doing it.
            </p>
            <a 
              href="https://instagram.com/virtutask_" 
              className="d-flex align-items-center text-decoration-none text-light mb-2 footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="me-2" size={18} />
              <span>@virtutask_</span>
            </a>
          </div>

          {/* Center Section - Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Explore</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-light footer-link">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/why-us" className="text-decoration-none text-light footer-link">
                  Why Us?
                </a>
              </li>
              <li className="mb-2">
                <a href="/features" className="text-decoration-none text-light footer-link">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact & CTA */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <a 
              href="mailto:virtutaskapp@gmail.com"
              className="d-flex align-items-center text-decoration-none text-light mb-4 footer-link"
            >
              <Mail className="me-2" size={18} />
              <span>virtutaskapp@gmail.com</span>
            </a>
            <div className=" bg-opacity-10 rounded-4 mt-3">
              <p className="mb-0 fw-medium">
                Join us in redefining productivity! ✨
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Border Line */}
        <hr className="my-4 border-light opacity-10" />

        {/* Copyright */}
        <div className="text-center text-light">
          <small>&copy; {new Date().getFullYear()} VirtuTask. All rights reserved.</small>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: white;
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: white !important;
        }

        .footer-link:hover::after {
          width: 100%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;