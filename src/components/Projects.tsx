import React, { useState } from 'react';
import { Rocket, CheckCircle2, X, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectMetric {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  badge: string;
  period: string;
  role: string;
  description: string;
  metrics: ProjectMetric[];
  details: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-wrapper">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Rocket size={14} />
            <span>Production &amp; Systems</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="section-description">
            Architected enterprise solutions, distributed event-driven backends, and responsive cross-platform applications.
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-top">
                <div className="project-badge-row">
                  <span className="project-badge">{project.badge}</span>
                  <span className="project-period">{project.period}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-desc">{project.description}</p>

                {/* Metrics Highlight Row */}
                <div className="project-metrics-row">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="project-metric-item">
                      <div className="metric-number">{m.value}</div>
                      <div className="metric-text">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <ul className="project-details-list">
                  {project.details.slice(0, 2).map((point, pIdx) => (
                    <li key={pIdx} className="project-detail-point">
                      <CheckCircle2 size={15} className="point-bullet" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="btn-project-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <Layers size={15} />
                  <span>Architecture Deep-Dive</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-link"
                    style={{ marginLeft: 'auto' }}
                  >
                    <GithubIcon size={15} />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Architecture Deep-Dive */}
        {activeModalProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              backgroundColor: 'rgba(5, 3, 15, 0.85)',
              backdropFilter: 'blur(10px)',
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="glass-card"
              style={{
                maxWidth: '680px',
                width: '100%',
                padding: '2.5rem',
                maxHeight: '85vh',
                overflowY: 'auto',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-subtle)',
                  cursor: 'pointer',
                }}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>

              <span className="project-badge" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                {activeModalProject.badge}
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {activeModalProject.title}
              </h3>
              <p style={{ color: '#c084fc', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                {activeModalProject.role} • {activeModalProject.period}
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                {activeModalProject.description}
              </p>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                Engineering Highlights &amp; Metrics
              </h4>
              <ul className="project-details-list" style={{ marginBottom: '1.75rem' }}>
                {activeModalProject.details.map((detail, dIdx) => (
                  <li key={dIdx} className="project-detail-point">
                    <CheckCircle2 size={16} className="point-bullet" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                Complete Technology Stack
              </h4>
              <div className="project-tags">
                {activeModalProject.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#c7d2fe' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
