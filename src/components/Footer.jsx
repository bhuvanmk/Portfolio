import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FiLinkedin, FiGithub, FiMail, FiCode, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '3rem 0 2rem 0',
        color: 'var(--text-muted)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '1.25rem'
          }}
        >
          {/* Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: '700',
              color: 'var(--text-main)'
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-cyan-dark)',
                color: '#ffffff',
                fontSize: '1rem'
              }}
            >
              <FiCode />
            </span>
            <span>Bhuvan<span style={{ color: 'var(--accent-cyan)' }}>.MB</span></span>
          </div>

          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '500px' }}>
            Full-Stack Developer · Java · Python · AI Application Developer
          </p>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: 'var(--text-body)',
                fontSize: '1.2rem',
                transition: 'color var(--transition-fast)'
              }}
            >
              <FiLinkedin />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                color: 'var(--text-body)',
                fontSize: '1.2rem',
                transition: 'color var(--transition-fast)'
              }}
            >
              <FiGithub />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              style={{
                color: 'var(--text-body)',
                fontSize: '1.2rem',
                transition: 'color var(--transition-fast)'
              }}
            >
              <FiMail />
            </a>
          </div>

          {/* Copyright & Scroll to Top */}
          <div
            style={{
              width: '100%',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <div>
              © 2026 Bhuvan MB. All rights reserved.
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--accent-cyan)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>Back to top</span>
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
