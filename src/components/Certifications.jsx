import React, { useState, useEffect } from 'react';
import { defaultCertificationsData, saveStoredData, getStoredData } from '../data/portfolioData';
import EditModal from './EditModal';
import { FiAward, FiExternalLink, FiCalendar, FiEdit3, FiCheckCircle } from 'react-icons/fi';

const Certifications = () => {
  const [certsList, setCertsList] = useState([]);
  const [editingCert, setEditingCert] = useState(null);

  useEffect(() => {
    // Always use the latest updated certifications list
    setCertsList(defaultCertificationsData);
  }, []);

  const handleSaveCert = (updatedCert) => {
    const newList = certsList.map(c => c.id === updatedCert.id ? updatedCert : c);
    setCertsList(newList);
    saveStoredData('certificationsData', newList);
    setEditingCert(null);
  };

  const handleResetCerts = () => {
    if (window.confirm('Reset certification links back to defaults?')) {
      setCertsList(defaultCertificationsData);
      saveStoredData('certificationsData', defaultCertificationsData);
      setEditingCert(null);
    }
  };

  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-tag">✦ CERTIFICATIONS & CREDENTIALS</span>
            <h2 className="section-title">Verified Certifications</h2>
            <p className="section-subtitle">
              Professional credentials in Machine Learning, Prompt Engineering, Data Science, and Python Libraries.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {certsList.map(cert => (
            <div
              key={cert.id}
              className="card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-accent)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <FiAward style={{ fontSize: '1.6rem', color: 'var(--accent-cyan)' }} />
                    <span className="badge badge-emerald">DRIVE VERIFIED CREDENTIAL</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FiCalendar />
                      {cert.year}
                    </span>

                    <button
                      onClick={() => setEditingCert(cert)}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}
                      title="Edit certificate details"
                    >
                      <FiEdit3 />
                    </button>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  {cert.title}
                </h3>

                <div style={{ fontSize: '0.92rem', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '0.75rem' }}>
                  Issuer: {cert.issuer}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  {cert.description}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                  OFFICIAL CERTIFICATE PDF
                </span>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}
                >
                  <span>View Certificate</span>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Live Edit Modal */}
        <EditModal
          isOpen={!!editingCert}
          editType="cert"
          editData={editingCert}
          onClose={() => setEditingCert(null)}
          onSave={handleSaveCert}
          onReset={handleResetCerts}
        />
      </div>
    </section>
  );
};

export default Certifications;
