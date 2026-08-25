import React from 'react';
import { codingProfilesData } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiExternalLink, FiCode } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from 'react-icons/si';

const platformIcons = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  leetcode: <SiLeetcode />,
  hackerrank: <SiHackerrank />,
  gfg: <SiGeeksforgeeks />
};

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ PROFILES & VERIFICATION</span>
          <h2 className="section-title">Coding & Professional Profiles</h2>
          <p className="section-subtitle">
            Explore code repositories, competitive programming activity, and professional networks.
          </p>
        </div>

        {/* Profiles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {codingProfilesData.map(profile => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem',
                textDecoration: 'none',
                transition: 'all var(--transition-fast)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', display: 'flex' }}>
                  {platformIcons[profile.icon] || <FiCode />}
                </span>
                <div>
                  <div style={{ color: 'var(--text-main)', fontWeight: '600', fontSize: '0.98rem' }}>
                    {profile.platform}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {profile.handle}
                  </div>
                </div>
              </div>

              <FiExternalLink style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
