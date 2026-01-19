import React, { useState } from 'react';
import './Certificates.css';
import GEN_AI from '../assets/GEN_AI.PNG';
import JAVA from '../assets/JAVA.PNG';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "GEN AI Programming",

      date: "2025",
      description: "Certified in GEN AI Studio by Google",
      skills: [
        "LLMs",
        "Prompt engineering",
        "AI model interaction via GenAI Studio",
      ],
      image: GEN_AI,
    },
    {
      title: "JAVA Programming",

      date: "2024",
      description: "Certified in Introduction to Java Programming",
      skills: [
        "Core Java programming concepts",
        "Oops in Java",
        "Basic problem-solving using Java",
        "Memory Programming",
      ],
      image: JAVA,
    },
  ];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Certificates</span>
        </h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-image">
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  className="certificate-img"
                />
                <div 
                  className="image-overlay"
                  onClick={() => openCertificate(cert.image)}
                >
                  <span className="view-certificate">View Certificate</span>
                </div>
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <span className="certificate-date">{cert.date}</span>
                <p className="certificate-description">{cert.description}</p>
                <div className="certificate-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal - Same as Internships */}
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

export default Certificates;