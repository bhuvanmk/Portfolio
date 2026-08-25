import React, { useState, useEffect } from 'react';
import { defaultProjectsData, saveStoredData, getStoredData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import EditModal from './EditModal';
import { FiGithub, FiExternalLink, FiCpu, FiArrowRight, FiEdit3, FiRotateCcw } from 'react-icons/fi';

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    const loaded = getStoredData('projectsData', defaultProjectsData);
    setProjectsList(loaded);
  }, []);

  const handleSaveProject = (updatedProject) => {
    const newList = projectsList.map(p => p.id === updatedProject.id ? updatedProject : p);
    setProjectsList(newList);
    saveStoredData('projectsData', newList);
    setEditingProject(null);
  };

  const handleResetProjects = () => {
    if (window.confirm('Reset project data back to original default links?')) {
      setProjectsList(defaultProjectsData);
      saveStoredData('projectsData', defaultProjectsData);
      setEditingProject(null);
    }
  };

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-tag">✦ FEATURED WORK</span>
            <h2 className="section-title">Applied AI & Full-Stack Projects</h2>
            <p className="section-subtitle">
              Real-world systems built with modern software architecture, Java/Python backends, and practical AI integrations.
            </p>
          </div>

          <button
            onClick={handleResetProjects}
            className="btn btn-secondary btn-sm"
            style={{ fontSize: '0.8rem' }}
            title="Reset project links to defaults"
          >
            <FiRotateCcw />
            <span>Reset Project Links</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {projectsList.map(project => (
            <div
              key={project.id}
              className="card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-accent)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Category & Badge & Quick Edit */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <span className="badge badge-emerald">
                    {project.category}
                  </span>

                  <button
                    onClick={() => setEditingProject(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}
                    title="Edit project details or link"
                  >
                    <FiEdit3 />
                    <span>Edit</span>
                  </button>
                </div>

                {/* Project Title */}
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  {project.title}
                </h3>

                {/* One-Line Tagline */}
                <p style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  {project.tagline}
                </p>

                {/* Why This Matters Box */}
                <div
                  style={{
                    background: 'var(--bg-surface)',
                    borderLeft: '3px solid var(--accent-cyan)',
                    padding: '0.75rem 1rem',
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: '700' }}>
                    WHY THIS MATTERS
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                    {project.whyItMatters}
                  </div>
                </div>

                {/* Short Description */}
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                  {project.stack.map(tech => (
                    <span key={tech} className="badge" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  flexWrap: 'wrap'
                }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.82rem' }}
                >
                  <FiCpu />
                  <span>View Architecture</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repo for ${project.title}`}
                    title={`Open GitHub Repository: ${project.github}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.4rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--accent-cyan)',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}
                  >
                    <FiGithub />
                    <span>GitHub Repo</span>
                  </a>

                  {project.liveDemo && project.liveDemo !== 'ADD_LIVE_DEMO_URL' && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      title="Live Demo"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '34px',
                        height: '34px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--badge-bg)',
                        border: '1px solid var(--badge-border)',
                        color: 'var(--accent-cyan)',
                        fontSize: '1rem'
                      }}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Action */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://github.com/bhuvanmk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span>View All Repositories on GitHub (bhuvanmk)</span>
            <FiArrowRight />
          </a>
        </div>

        {/* Architecture Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Live Edit Modal */}
        <EditModal
          isOpen={!!editingProject}
          editType="project"
          editData={editingProject}
          onClose={() => setEditingProject(null)}
          onSave={handleSaveProject}
          onReset={handleResetProjects}
        />
      </div>
    </section>
  );
};

export default Projects;
