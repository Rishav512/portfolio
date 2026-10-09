import React from 'react';
import { ArrowRight, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

interface HeroProps {
  personal: {
    name: string;
    role: string;
    badge: string;
    email: string;
    location: string;
    bioLead: string;
    bioFull: string;
    socialLinks: Array<{
      name: string;
      url: string;
      username: string;
      icon: string;
    }>;
  };
  stats: Array<{
    value: string;
    label: string;
    subtext: string;
  }>;
}

export const Hero: React.FC<HeroProps> = ({ personal, stats }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="content-container">
        {/* Availability Badge */}
        <div className="hero-pill-wrapper">
          <div className="hero-pill">
            <span className="status-dot"></span>
            <span>{personal.badge}</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <h1 className="hero-title">
          Engineering High-Performance <span className="gradient-text">Web Systems</span> &amp; Scalable Architectures.
        </h1>

        {/* Lead Subtitle */}
        <p className="hero-subtitle">
          {personal.bioLead}
        </p>

        {/* Interactive CTA Buttons */}
        <div className="hero-cta-group">
          <a href="#projects" className="btn-primary">
            <span>Explore Engineering Work</span>
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="btn-secondary">
            <Mail size={18} />
            <span>Get In Touch</span>
          </a>

          <a 
            href="#skills" 
            className="btn-secondary"
            title="Inspect technical stack"
          >
            <Terminal size={17} />
            <span>Tech Stack</span>
          </a>
        </div>

        {/* Hero Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-subtext">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
