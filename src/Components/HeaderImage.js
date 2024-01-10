import React from "react";

const HeaderImage = ({ image, project, link }) => {
  return (
    <div className="header-image">
      <img src={image} alt={project} />
      <h1 className="project-image-title">{project}</h1>
      <a className="project-button" href={link} target="_blank">
        View Project
      </a>
    </div>
  );
};

export default HeaderImage;
