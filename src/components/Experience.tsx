import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="section-wrapper">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Progression</span>
          </div>
          <h2 className="section-title">
            Enterprise &amp; Research <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description">
            Hands-on software engineering delivering high-availability systems at Incture Technologies and telemetry research at ISRO.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="experience-timeline">
          {experience.map((item) => (
            <div key={item.id} className="glass-card experience-card">
              <div className="exp-header">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <h3 className="exp-role">{item.role}</h3>
                    {item.status === 'Current' && (
                      <span className="status-indicator">
                        <span className="status-dot"></span>
                        <span>Current</span>
                      </span>
                    )}
                  </div>
                  <div className="exp-company">{item.company}</div>
                </div>

                <div className="exp-meta">
                  <div className="exp-period" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end' }}>
                    <Calendar size={13} color="#a5b4fc" />
                    <span>{item.period}</span>
                  </div>
                  <div className="exp-location" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end', marginTop: '0.2rem' }}>
                    <MapPin size={13} color="#64748b" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p className="exp-summary">{item.summary}</p>

              <ul className="exp-bullets">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="exp-bullet-item">
                    <ChevronRight size={16} className="exp-bullet-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-tech-row">
                {item.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag" style={{ background: 'rgba(99, 102, 241, 0.08)', color: '#cbd5e1' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
