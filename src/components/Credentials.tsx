import React from 'react';
import { GraduationCap, Award, ShieldCheck, Cloud, Code2, Cpu, CheckCircle } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  icon: string;
  date: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
}

interface CredentialsProps {
  education: Education;
  certifications: Certification[];
}

export const Credentials: React.FC<CredentialsProps> = ({ education, certifications }) => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud size={20} />;
      case 'ShieldCheck': return <ShieldCheck size={20} />;
      case 'Code2': return <Code2 size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      default: return <Award size={20} />;
    }
  };

  return (
    <section id="credentials" className="section-wrapper">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic &amp; Accreditations</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-description">
            Strong academic foundations in telecommunications and computer systems paired with industry certifications.
          </p>
        </div>

        {/* 2-Column Bento: Education Card + Certifications List */}
        <div className="cred-grid">
          {/* Education Card */}
          <div className="glass-card edu-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', color: '#c084fc' }}>
                <GraduationCap size={24} />
                <span className="font-mono" style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Degree Overview
                </span>
              </div>

              <h3 className="edu-degree">{education.degree}</h3>
              <p className="edu-institution">{education.institution}</p>
              <p className="edu-period">{education.location} • {education.period}</p>

              <div className="edu-grade-badge">
                {education.grade}
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                {education.highlights.map((h, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <CheckCircle size={15} color="#818cf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem', color: '#38bdf8' }}>
              <Award size={24} />
              <span className="font-mono" style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Accredited Credentials
              </span>
            </div>

            <div className="certs-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <div className="cert-icon-wrapper">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
