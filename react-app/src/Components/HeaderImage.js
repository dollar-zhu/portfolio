import React from "react";

const HeaderImage = ({ image, project, link }) => {
  return (
    <div className="header-image">
      <img src={image} alt={project} />
      <h1 className="project-image-title">{project}</h1>
      <button className="project-button" href={link}>
        View Project
      </button>
    </div>
  );
};

export default HeaderImage;
