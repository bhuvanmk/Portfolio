import React from 'react';
import { skillsData } from '../data/portfolioData';
import { FiCode, FiLayers, FiServer, FiDatabase, FiCpu, FiTool } from 'react-icons/fi';

const categoryIcons = {
  "Programming Languages": <FiCode style={{ color: 'var(--accent-cyan)' }} />,
  "Frontend Development": <FiLayers style={{ color: 'var(--accent-cyan)' }} />,
  "Backend & Frameworks": <FiServer style={{ color: 'var(--accent-emerald)' }} />,
  "Database & Storage": <FiDatabase style={{ color: 'var(--accent-cyan)' }} />,
  "AI & Machine Learning": <FiCpu style={{ color: 'var(--accent-indigo)' }} />,
  "Developer Tools & OS": <FiTool style={{ color: 'var(--accent-amber)' }} />
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ TECHNICAL STACK</span>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-subtitle">
            Core technologies, programming languages, and tools I use to design, build, and deploy software applications.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {Object.entries(skillsData).map(([category, items]) => (
            <div
              key={category}
              className="card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.25rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--border-subtle)'
                  }}
                >
                  <span style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}>
                    {categoryIcons[category] || <FiCode />}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-main)' }}>
                    {category}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.65rem'
                  }}
                >
                  {items.map(skill => (
                    <div
                      key={skill.name}
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-accent)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.4rem 0.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.15rem',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.88rem' }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
