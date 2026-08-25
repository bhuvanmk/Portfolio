import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { FiStar, FiCalendar, FiInfo } from 'react-icons/fi';

const Achievements = () => {
  return (
    <section id="achievements" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ ACHIEVEMENTS & AWARDS</span>
          <h2 className="section-title">Achievements & Activities</h2>
          <p className="section-subtitle">
            Coding competitions, hackathons, academic recognitions, and technical workshops.
          </p>
        </div>

        {/* Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {achievementsData.map(ach => (
            <div
              key={ach.id}
              className="card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-accent)'
              }}
            >
              {ach.isPlaceholder && (
                <div style={{ marginBottom: '0.75rem' }}>
                  <span className="badge badge-placeholder">
                    <FiInfo /> PLACEHOLDER ENTRY
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <FiStar style={{ fontSize: '1.4rem', color: 'var(--accent-amber)' }} />
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  {ach.year}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                {ach.title}
              </h3>

              <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: '500', marginBottom: '0.75rem' }}>
                {ach.issuer}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
