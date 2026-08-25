import React from 'react';
import { experienceData } from '../data/portfolioData';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiUserCheck, FiCheckCircle } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ WORK EXPERIENCE</span>
          <h2 className="section-title">Industry Training & Internships</h2>
          <p className="section-subtitle">
            Professional software engineering work experience, technical mentorship, and project contributions.
          </p>
        </div>

        {/* Experience Cards Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {experienceData.map(exp => (
            <div
              key={exp.id}
              className="card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-accent)',
                marginBottom: '1.5rem',
                position: 'relative',
                padding: '2rem'
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.25rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                    INTERNSHIP COMPLETION VERIFIED
                  </span>

                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', margin: '0.25rem 0' }}>
                    {exp.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginTop: '0.25rem'
                    }}
                  >
                    <FiBriefcase />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <FiCalendar style={{ color: 'var(--accent-emerald)' }} />
                    {exp.period}
                  </span>

                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <FiMapPin />
                    {exp.location}
                  </span>

                  {exp.score && (
                    <span
                      style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid var(--accent-emerald)',
                        color: 'var(--accent-emerald)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        fontFamily: 'var(--font-mono)',
                        marginTop: '0.35rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <FiAward /> Score: {exp.score}
                    </span>
                  )}
                </div>
              </div>

              {/* Mentor details */}
              {exp.mentor && (
                <div
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1rem',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.88rem'
                  }}
                >
                  <FiUserCheck style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', flexShrink: 0 }} />
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>MENTOR & SUPERVISOR: </span>
                    <strong style={{ color: 'var(--text-main)' }}>{exp.mentor}</strong>
                  </div>
                </div>
              )}

              {/* Bullet points */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                {exp.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.93rem',
                      color: 'var(--text-body)'
                    }}
                  >
                    <FiCheckCircle style={{ color: 'var(--accent-emerald)', marginTop: '4px', flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
