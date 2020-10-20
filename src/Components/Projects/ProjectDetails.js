import React from 'react';

const ProjectDetails = (props) => {
  console.log(props);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, error.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Maxim Gordiyenko</div>
          <div>2nd September 2pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
