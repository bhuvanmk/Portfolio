import React from 'react';
import { FiX, FiGithub, FiExternalLink, FiCpu, FiLayers, FiDatabase, FiServer, FiCheckCircle } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          padding: '2rem'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          <FiX />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
            {project.category}
          </span>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '0.25rem' }}>
            {project.title}
          </h3>
          <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            {project.tagline}
          </p>
        </div>

        {/* Why it matters box */}
        <div
          style={{
            background: 'var(--badge-bg)',
            border: '1px solid var(--badge-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            marginBottom: '1.5rem'
          }}
        >
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: '700' }}>
            ENGINEERING & BUSINESS IMPACT
          </span>
          <p style={{ color: 'var(--text-main)', margin: '0.25rem 0 0 0', fontSize: '0.95rem' }}>
            {project.whyItMatters}
          </p>
        </div>

        {/* Architecture Breakdown */}
        {project.architecture && (
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.85rem', color: 'var(--text-main)' }}>
              System Architecture & Data Flow
            </h4>
            
            <div style={{ display: 'grid', gap: '0.85rem' }}>
              {project.architecture.client && (
                <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem' }}>
                  <FiLayers style={{ color: 'var(--accent-cyan)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: 'var(--text-main)', fontSize: '0.88rem' }}>Client UI Layer:</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.architecture.client}</div>
                  </div>
                </div>
              )}

              {project.architecture.backend && (
                <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem' }}>
                  <FiServer style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: 'var(--text-main)', fontSize: '0.88rem' }}>API Gateway / Service Layer:</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.architecture.backend}</div>
                  </div>
                </div>
              )}

              {project.architecture.aiEngine && (
                <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem' }}>
                  <FiCpu style={{ color: 'var(--accent-indigo)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: 'var(--text-main)', fontSize: '0.88rem' }}>AI / NLP Engine:</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.architecture.aiEngine}</div>
                  </div>
                </div>
              )}

              {project.architecture.vectorStore && (
                <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem' }}>
                  <FiCpu style={{ color: 'var(--accent-indigo)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: 'var(--text-main)', fontSize: '0.88rem' }}>Vector Store / Indexing:</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.architecture.vectorStore}</div>
                  </div>
                </div>
              )}

              {project.architecture.database && (
                <div style={{ background: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem' }}>
                  <FiDatabase style={{ color: 'var(--accent-cyan)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: 'var(--text-main)', fontSize: '0.88rem' }}>Database & Persistence:</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.architecture.database}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Highlights */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.85rem', color: 'var(--text-main)' }}>
            Key Engineering Deliverables
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                <FiCheckCircle style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.6rem' }}>
            TECHNOLOGY STACK
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.stack.map(tech => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <FiGithub />
            <span>View Source Code ({project.github})</span>
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <FiExternalLink />
            <span>Live Prototype ({project.liveDemo})</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
