import React from "react";

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      {project && (
        <>
          <h3>{project.name}</h3>
          <p>{project.about}</p>
          <div className="technologies">
            {project.technologies &&
              project.technologies.map((technology, index) => (
                <span key={index}>{technology}</span>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectItem;





















