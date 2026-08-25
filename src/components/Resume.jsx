import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FiDownload, FiFileText, FiExternalLink } from 'react-icons/fi';

const Resume = () => {
  return (
    <section id="resume" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ CURRICULUM VITAE</span>
          <h2 className="section-title">Resume & Official CV</h2>
          <p className="section-subtitle">
            Download or view Bhuvan MB's complete single-page resume for recruitment screening.
          </p>
        </div>

        <div
          className="card"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-accent)',
            maxWidth: '850px',
            margin: '0 auto',
            padding: '2.5rem',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--badge-bg)',
              border: '1px solid var(--badge-border)',
              color: 'var(--accent-cyan)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              marginBottom: '1.25rem'
            }}
          >
            <FiFileText />
          </div>

          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            {personalInfo.name} — Full-Stack & AI Developer
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            {personalInfo.degree} (CGPA 8.5) · {personalInfo.college} · {personalInfo.location}
          </p>

          {/* Core highlights tags */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
            <span className="badge badge-emerald">Java & Spring Boot</span>
            <span className="badge badge-emerald">Python & RAG / AI</span>
            <span className="badge badge-emerald">React.js & FastAPI</span>
            <span className="badge badge-emerald">MySQL & PostgreSQL</span>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FiDownload />
              <span>Download Resume PDF</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FiExternalLink />
              <span>View Resume in Google Drive</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
