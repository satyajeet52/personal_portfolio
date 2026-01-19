import React, { useState } from 'react';  // ← Add useState
import './Internships.css';
import ONGCCertificate from '../assets/ONGC.png';
import backend from '../assets/download.jpg';

const Internships = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);  // ← Add state

  let internships = [
    // {
    //   company: "ONGC",
    //   role: "Web Development Intern",
    //   duration: "May 2025 - July 2025",
    //   description: "Building responsive web applications at ONGC.",
    //   skills: ["Js", "PHP", "MySQL", "XAMPP"],
    //   certificate: ONGCCertificate,
    // },
    {
  company: " AICTE – National Internship Portal",
  role: "Data Science Intern",
  duration: "July 2025 - September 2025",
  description: "Successfully completed a 10-week Data Science Master Virtual Internship supported by Altair under AICTE and EduSkills.",
  skills: ["Data Science"],
  certificate: backend
}

    
    
  ];
  

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="internships" className="internships-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Internships</span>
        </h2>
        <div className="internships-grid">
          {internships.map((internship, index) => (
            <div key={index} className="internship-card">
              <div className="internship-image">
                <img 
                  src={internship.certificate} 
                  alt={`${internship.company} Internship Certificate`}
                  className="internship-img"
                />
                <div 
                  className="internship-overlay"
                  onClick={() => openCertificate(internship.certificate)}  // ← Add click handler
                >
                  <span className="view-internship">View Certificate</span>
                </div>
              </div>
              <div className="internship-content">
                <div className="internship-header">
                  <h3 className="company-name">{internship.company}</h3>
                  <span className="internship-duration">{internship.duration}</span>
                </div>
                <h4 className="internship-role">{internship.role}</h4>
                <p className="internship-description">{internship.description}</p>
                <div className="internship-skills">
                  {internship.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeCertificate}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeCertificate}>×</span>
            <img 
              src={selectedCertificate} 
              alt="Certificate Full View" 
              className="certificate-full-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Internships;