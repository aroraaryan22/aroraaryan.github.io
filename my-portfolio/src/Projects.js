import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './Projects.css';
import ProjectItem from './projectItems.js';
import ProjectList from './ProjectList.js'; 

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <Element name="projects" className="element">
      <section className="projects-section">
        <h2>Projects</h2>
      </section>
      <div className="projects">
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem
                key={idx}
                project={project}
                openProjectDetails={openProjectDetails}
              />
            );
          })}
        </div>
        {selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeProjectDetails}>
                &times;
              </span>
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.Technlogies}</p>
            </div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default Projects;
