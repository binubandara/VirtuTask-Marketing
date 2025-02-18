import React, { useEffect } from "react";
import { Heart, Clock, Brain, Globe, Trophy, Users, CheckSquare, Layout } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <CheckSquare className="text-success" size={40} />,
      title: "Smart Task Management",
      description: "Assign tasks, set deadlines, and collaborate seamlessly. No more missed deadlines or miscommunication—just smooth, efficient workflows.",
      image: "/images/task-management.png",
    },
    {
      icon: <Layout className="text-success" size={40} />,
      title: "Real-Time Productivity Tracking",
      description: "Get insights into how you work, with non-intrusive tracking that helps you stay focused without feeling monitored.",
      image: "/images/productivity-tracking.png",
    },
    {
      icon: <Brain className="text-success" size={40} />,
      title: "Focus Mode & Pomodoro Timer",
      description: "Set custom work sessions with scheduled breaks to stay in the zone while avoiding burnout.",
      image: "/images/focus-mode.png",
    },
    {
      icon: <Heart className="text-success" size={40} />,
      title: "Wellness Reminders & Habit Tracker",
      description: "Hydration prompts, posture checks, and movement breaks ensure your health isn't an afterthought.",
      image: "/images/wellness.png",
    },
    {
      icon: <Globe className="text-success" size={40} />,
      title: "Global Time Zone Support",
      description: "Know when your teammates are available at a glance, making remote work coordination effortless.",
      image: "/images/timezone.png",
    },
    {
      icon: <Users className="text-success" size={40} />,
      title: "Engagement & Team-Building Tools",
      description: "Fun quizzes, quick mini-games, and micro-challenges keep the team connected and motivated.",
      image: "/images/team-building.png",
    },
    {
      icon: <Trophy className="text-success" size={40} />,
      title: "Productivity-Based Reward System",
      description: "Boost motivation with leaderboard rankings, extended break perks, and monthly recognition for top performers.",
      image: "/images/rewards.png",
    },
    {
      icon: <Clock className="text-success" size={40} />,
      title: "Daily Reports & Analytics",
      description: "Managers receive detailed yet privacy-conscious reports that highlight team productivity trends.",
      image: "/images/analytics.png",
    },
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="hero-section features-hero">
        <div className="container text-center text-white">
          <h1 className="display-4 fw-bold mb-3" data-aos="fade-up">
            Powerful Features for Modern Work
          </h1>
          <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
            Work smarter, stay motivated, and feel great doing it.
          </p>
        </div>
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,50 C480,120 960,20 1440,50 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body p-4 d-flex align-items-start">
                    <div className="feature-icon-wrapper bg-success bg-opacity-10 p-3 rounded-3 me-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="h5">{feature.title}</h3>
                      <p className="text-muted">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center text-dark">
        <div className="container" data-aos="fade-up">
          <h2 className="display-6 fw-bold">Ready to Transform Your Work?</h2>
          <p className="lead">Join remote teams and work smarter with VirtuTask.</p>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
