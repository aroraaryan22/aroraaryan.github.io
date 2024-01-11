// ProjectDisplay.js
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const firstImage = project.images[0];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={firstImage} alt={project.name} /> 
      <h1>
        <b>Skills:</b> {project.skills}

      </h1>
      <h2>
        <b>Features:</b> {project.features}

      </h2>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
