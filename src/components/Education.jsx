import React from 'react';
import { educationData } from '../data/portfolioData';
import { FiBookOpen, FiMapPin, FiCalendar, FiAward, FiCheckCircle } from 'react-icons/fi';

const Education = () => {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ EDUCATION</span>
          <h2 className="section-title">Education & Academic History</h2>
          <p className="section-subtitle">
            Formal degree studies in Computer Science and Engineering principles at Yenepoya Institute of Technology.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.75rem', maxWidth: '850px', margin: '0 auto' }}>
          {educationData.map(edu => (
            <div
              key={edu.id}
              className="card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-accent)',
                padding: '2rem'
              }}
            >
              {/* Institution Header */}
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
                    {edu.id === 'edu-1' ? 'DEGREE COLLEGE' : edu.id === 'edu-2' ? 'PRE-UNIVERSITY (12TH)' : 'HIGH SCHOOL (10TH)'}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', margin: '0.25rem 0' }}>
                    {edu.degree}
                  </h3>
                  <div style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--accent-cyan)' }}>
                    {edu.field}
                  </div>
                  <div style={{ fontSize: '0.98rem', color: 'var(--text-body)', marginTop: '0.25rem' }}>
                    {edu.institution}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
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
                    {edu.period}
                  </span>

                  <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FiMapPin />
                    {edu.location}
                  </span>

                  <span
                    style={{
                      background: 'var(--badge-bg)',
                      border: '1px solid var(--badge-border)',
                      color: 'var(--accent-cyan)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      fontFamily: 'var(--font-mono)',
                      marginTop: '0.4rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <FiAward /> {edu.cgpa}
                  </span>
                </div>
              </div>

              {/* Coursework Modules */}
              <div>
                <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  SUBJECT HIGHLIGHTS & SKILLS
                </h4>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {edu.keyCoursework.map(course => (
                    <span
                      key={course}
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-main)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <FiCheckCircle style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }} />
                      {course}
                    </span>
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

export default Education;
