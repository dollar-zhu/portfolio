import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { usePageUpdate } from "../Providers/PageProvider";

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Image = ({ project }) => {
  const ref = useRef(null);
  const updatePage = usePageUpdate();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const [showDetails, setShowDetails] = useState(false);
  const viewportHeight = window.innerHeight;

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <section>
      <div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          updatePage(project.name);
          window.scrollTo(0, 1.2 * viewportHeight);
        }}
        style={{ cursor: "pointer" }}
      >
        <img
          className="dollars-projects"
          src={`/${project.name}.png`}
          alt="Dollar Zhu's projects"
        />
        {showDetails && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
            }}
          >
            <h3 className="project-name">{project.name}</h3>
            <h4 className="project-role"> {project.role}</h4>
            <p className="project-description">{project.description}</p>
          </div>
        )}
      </div>
      <motion.h2
        className="image-number"
        style={{ y }}
      >{`#00${project.id}`}</motion.h2>
    </section>
  );
};

export default Image;
