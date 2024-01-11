import React, { useState, useEffect } from 'react';

const ProjectItem = ({ project }) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [project.images.length]);

  const handleImageClick = () => {
    setShowFeatures(!showFeatures);
  };

  return (
    <div className="projectItem" onClick={handleImageClick}>
      <h1>{project.name}</h1>
      {!showFeatures && project.images && project.images.length > 0 && (
        <img src={project.images[currentImageIndex]} alt={project.name} />
      )}
      {showFeatures && (
        <div>
          <p>Technologies: {project.Technologies}</p>
          <p>Features: {project.features}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
