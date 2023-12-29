import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Projects from "./Projects";
import MyMusic from "./MyMusic";
import "../AboutMe.css";
import Navbar from "../Components/Navbar";
import DollarProfile from "../Images/Dollar-profile.png";
import motion from "framer-motion";
import AboutMeTitle from "../Components/AboutMeTitle";
import EducationSection from "../Components/EducationSection";
import SkillsSection from "../Components/SkillsSection";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <div className="about-me-area">
        <AboutMeTitle />
        <EducationSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default AboutMe;
