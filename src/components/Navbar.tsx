import React, { useState } from 'react';
import { Menu, X, Send, Sparkles } from 'lucide-react';

interface NavbarProps {
  personalName: string;
  badge: string;
  domain: string;
}

export const Navbar: React.FC<NavbarProps> = ({ personalName, badge, domain }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="content-container nav-inner">
        {/* Brand Logo & Monogram */}
        <a href="#hero" className="brand-monogram">
          <div className="monogram-badge">RN</div>
          <div>
            <span className="brand-text">{personalName}</span>
            <span className="brand-domain">.{domain.split('.').pop() || 'work'}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li><a href="#about" className="nav-item-link">Overview</a></li>
            <li><a href="#skills" className="nav-item-link">Stack &amp; Tools</a></li>
            <li><a href="#projects" className="nav-item-link">Featured Work</a></li>
            <li><a href="#experience" className="nav-item-link">Experience</a></li>
            <li><a href="#credentials" className="nav-item-link">Education</a></li>
          </ul>
        </nav>

        {/* Action Controls & Availability Badge */}
        <div className="nav-actions">
          <div className="status-indicator" title={badge}>
            <span className="status-dot"></span>
            <span>Available</span>
          </div>

          <a href="#contact" className="btn-contact-nav">
            <Send size={14} />
            <span>Contact</span>
          </a>

          {/* Mobile menu toggle */}
          <button 
            type="button"
            className="mobile-nav-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <a href="#about" className="nav-item-link" onClick={closeMobileMenu}>Overview</a>
          <a href="#skills" className="nav-item-link" onClick={closeMobileMenu}>Stack &amp; Tools</a>
          <a href="#projects" className="nav-item-link" onClick={closeMobileMenu}>Featured Work</a>
          <a href="#experience" className="nav-item-link" onClick={closeMobileMenu}>Experience</a>
          <a href="#credentials" className="nav-item-link" onClick={closeMobileMenu}>Education &amp; Certs</a>
          <a href="#contact" className="btn-contact-nav" onClick={closeMobileMenu} style={{ justifyContent: 'center' }}>
            <Send size={15} />
            <span>Initiate Contact</span>
          </a>
        </div>
      )}
    </header>
  );
};
