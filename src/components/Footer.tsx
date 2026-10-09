import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';

interface FooterProps {
  footer: {
    tagline: string;
    copyright: string;
    domain: string;
  };
  personalName: string;
}

export const Footer: React.FC<FooterProps> = ({ footer, personalName }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="content-container footer-inner">
        <div className="footer-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.05rem' }}>
              {personalName}
            </span>
            <div className="footer-domain-badge">
              <Globe size={13} />
              <span>{footer.domain}</span>
            </div>
          </div>
          <p className="footer-tagline">{footer.tagline}</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
            {footer.copyright}
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="scroll-top-btn"
          title="Scroll to top of page"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};
