import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--accent-cyan)',
        padding: '0.5rem 0.75rem',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'all var(--transition-fast)'
      }}
    >
      {theme === 'dark' ? (
        <>
          <FiSun style={{ fontSize: '1.1rem' }} />
          <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Light</span>
        </>
      ) : (
        <>
          <FiMoon style={{ fontSize: '1.1rem' }} />
          <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Dark</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
