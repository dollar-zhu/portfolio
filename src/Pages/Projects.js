import React from "react";
import "../Projects.css";
import Image from "../Components/Image";
import Navbar from "../Components/Navbar";
import { color, motion, useScroll, useSpring } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import MyMusic from "./MyMusic";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "The Vassar Life",
      role: "Director, Lead Developer",
      description:
        "A digital campus for new and perspective students at Vassar College",
    },
    {
      id: 2,
      name: "Life @ PRIME",
      role: "Director, Lead Developer",
      description:
        "An integrated solution that helps students learn about PRIME and schools attract more qualified candidates",
    },

    {
      id: 3,
      name: "Recycle It!",
      role: "Developer, Researcher",
      description:
        "A research project examining the impact of gamification on recycling habits",
    },
    {
      id: 4,
      name: "The Brain Game Lab",
      role: "Front-End Developer",
      description:
        "A web platform that runs fun, group-based cognitive experiments",
    },
    {
      id: 5,
      name: "Lilly Family",
      role: "UI/UX Intern - Pure UX",
      description:
        "An app facilitating the communication between caregivers and doctors.",
    },
    {
      id: 6,
      name: "Topline Strategy",
      role: "Associate Consultant",
      description:
        "A boutique consulting firm that helps B2B technology companies grow.",
    },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="project-page">
      <Navbar />
      {projectList.map((project) => (
        <Image project={project} key={project.id} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
};

export default Projects;
