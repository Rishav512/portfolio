import React, { useState } from 'react';
import { Terminal, Search, CheckCircle2, Sparkles, Code2, Server, Cloud, Cpu } from 'lucide-react';

interface SkillItem {
  name: string;
  level: string;
  highlight: boolean;
}

interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allCategories = ['All', ...categories.map((c) => c.category)];

  // Filter skills based on tab and search
  const filteredCategories = categories
    .map((cat) => {
      // If a specific tab is chosen, match category
      if (activeTab !== 'All' && cat.category !== activeTab) {
        return null;
      }
      // Filter individual skills by search query
      const matchingSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      if (matchingSkills.length === 0) return null;
      return {
        ...cat,
        skills: matchingSkills,
      };
    })
    .filter(Boolean) as SkillCategory[];

  const totalSkillsCount = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="section-wrapper">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>Technical Mastery</span>
          </div>
          <h2 className="section-title">
            Skills, Tools &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-description">
            A comprehensive inventory of languages, frameworks, cloud tooling, and systems engineering workflows I utilize daily.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {/* Category Tabs */}
          <div className="skills-tabs" style={{ marginBottom: 0 }}>
            {allCategories.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`skill-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder={`Search across ${totalSkillsCount} technologies (e.g., React, Kafka, Docker)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.75rem', borderRadius: '9999px', fontSize: '0.88rem' }}
            />
          </div>
        </div>

        {/* Skills Display Grid */}
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          {filteredCategories.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-subtle)' }}>
              <p>No technologies matched &quot;{searchQuery}&quot;.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
                style={{ marginTop: '0.75rem', background: 'none', border: 'none', color: '#a855f7', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredCategories.map((cat, idx) => (
              <div key={idx} className="skills-category-group">
                <div className="category-header-row">
                  <div>
                    <h3 className="category-name">{cat.category}</h3>
                    <p className="category-desc">{cat.description}</p>
                  </div>
                  <span className="font-mono" style={{ fontSize: '0.78rem', color: '#818cf8', background: 'rgba(99, 102, 241, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>
                    {cat.skills.length} tools
                  </span>
                </div>

                <div className="skills-chip-grid">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`skill-chip ${skill.highlight ? 'highlight' : ''}`}
                      title={`${skill.name} — ${skill.level}`}
                    >
                      {skill.highlight && <Sparkles size={13} color="#c084fc" />}
                      <span>{skill.name}</span>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
