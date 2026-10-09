import React from 'react';
import { Layers, Zap, Server, Cloud, Cpu, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

interface AboutProps {
  personal: {
    name: string;
    role: string;
    location: string;
    email: string;
    bioFull: string;
    socialLinks: Array<{
      name: string;
      url: string;
      username: string;
      icon: string;
    }>;
  };
  highlights: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const About: React.FC<AboutProps> = ({ personal, highlights }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers size={26} />;
      case 'Zap': return <Zap size={26} />;
      case 'Server': return <Server size={26} />;
      case 'Cloud': return <Cloud size={26} />;
      default: return <Cpu size={26} />;
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon size={17} />;
      case 'linkedin': return <LinkedinIcon size={17} />;
      case 'leetcode': return <LeetCodeIcon size={17} />;
      case 'email': return <Mail size={17} />;
      default: return <ArrowUpRight size={17} />;
    }
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="section-title">
            Architecting for <span className="gradient-text">Speed, Modularity</span> &amp; Scale
          </h2>
          <p className="section-description">
            Bridging the gap between complex enterprise backend requirements and snappy, fluid user experiences.
          </p>
        </div>

        {/* Top Bio Banner */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  {personal.name}
                </h3>
                <p style={{ color: 'var(--text-accent)', fontWeight: 600, fontSize: '0.95rem' }}>
                  {personal.role}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-subtle)', fontSize: '0.88rem' }}>
                <MapPin size={16} color="#818cf8" />
                <span>{personal.location}</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: '1.7' }}>
              {personal.bioFull}
            </p>

            {/* Social pills */}
            <div className="socials-row" style={{ marginTop: '0.5rem' }}>
              {personal.socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  {getSocialIcon(s.name)}
                  <span>{s.name}</span>
                  <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Architecture Highlight Pillars */}
        <div className="expertise-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="glass-card expertise-card">
              <div className="expertise-icon-box">
                {getIcon(item.icon)}
              </div>
              <h3 className="expertise-title">{item.title}</h3>
              <p className="expertise-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
