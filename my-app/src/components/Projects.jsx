import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("personal");
  const [activeProject, setActiveProject] = useState(0);

  const projects = {
    internship: [
    //   {
    //     title: "ONGC Digital Forms System",
    //     description:
    //       "Developed a comprehensive digital forms solution with secure data handling and automated storage systems.",
    //     tech: ["PHP", "JS", "MySQL", "HTML", "CSS", "Validation"],
    //     gradient: "gradient-1",
    //     features: [
    //       "Dynamic Digital Forms with validation",
    //       "Secure database storage",
    //       "Organized data retrieval",
    //       "Automatic data storage",
    //     ],
    //   },
      {
        title: "AICTE – National Internship Portal",
        description:
          "Data Science internship focused on real-world analytics and machine learning workflows.",
        tech: [
          "Python",
          "Data Analysis",
          "Machine Learning",
          "Data Visualization",
          "Statistics",
        ],
        gradient: "gradient-3",
        features: [
          "Dataset cleaning and analysis",
          "Predictive model building",
          "Industry tooling exposure",
          "Certified virtual internship",
        ],
      },
    ],

    personal: [
      {
        title: "Virtual Banking System",
        description:
          "A virtual banking system enabling secure online banking operations.",
        tech: ["Java", "SQL", "MySQL Driver", "XAMPP"],
        gradient: "gradient-2",
      },
      {
        title: "video calling platform",
        description:
          "A MERN-based interview platform with real-time video calling, Monaco code editor, and automated test execution.",
        tech: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Clerk",
          "Stream SDK",
          "Inngest",
          "Monaco Editor",
        ],
        gradient: "gradient-1",
      },
      {
        title: "QUICK AI",
        description:
          "QUICK AI is a platform where you can generate AI  images ask Questions and get content quickly and efficiently.",
        tech: ["Vite", "React", "TypeScript", "Tailwind CSS", "Supabase", "REST APIs"],
        gradient: "gradient-3",
      },
      {
        title: "Stream Backend",
        description:
          "Secure backend for a YouTube-like platform with authentication and video management.",
        tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
        gradient: "gradient-3",
      },
    ],
  };

  const currentProjects = projects[activeCategory];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Creations</span>
        </h2>

        <div className="projects-tabs">
          <button
            className={`tab-btn ${
              activeCategory === "personal" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("personal")}
          >
            Personal Projects
          </button>
          <button
            className={`tab-btn ${
              activeCategory === "internship" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("internship")}
          >
            Internship Projects
          </button>
        </div>

        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${
                activeProject === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className={`project-gradient ${project.gradient}`}></div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.features && (
                  <div className="project-features">
                    <h4>Key Contributions:</h4>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
