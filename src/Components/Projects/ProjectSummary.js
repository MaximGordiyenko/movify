import React from 'react';

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <time className='grey-text'>12 Octobre 2 pm</time>
      </div>
    </div>
  );
};

export default ProjectSummary;
