import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Projects from "./Projects";
import MyMusic from "./MyMusic";

const AboutMe = () => {
  return (
    <div>
      <nav className="title">
        <Link to="/about-me" className="tag-inactive">
          {"<About Me/>"}
        </Link>
        <Link className="tag-active" to="/projects">
          {"<Projects/>"}
        </Link>
        <Link to="/my-music" className="tag-inactive">
          {"<My Music/>"}
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my-music" element={<MyMusic />} />
      </Routes>
    </div>
  );
};

export default AboutMe;
