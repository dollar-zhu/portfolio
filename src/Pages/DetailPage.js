import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import { usePage, usePageUpdate } from "../Providers/PageProvider";
import TheVassarLife from "./TheVassarLife";
import LifeAtPRIME from "./LifeAtPRIME";
import RecycleIt from "./RecycleIt";

const DetailPage = () => {
  //could either be projects, about me, or ind. project page
  const page = usePage();
  let currPage = <Projects />;
  if (page === "projects") {
    currPage = <Projects />;
  } else if (page === "about me") {
    currPage = <AboutMe />;
  } else if (page === "The Vassar Life") {
    currPage = <TheVassarLife />;
  } else if (page === "Life @ PRIME") {
    currPage = <LifeAtPRIME />;
  } else if (page === `Recycle It!`) {
    currPage = <RecycleIt />;
  }
  return <div>{currPage}</div>;
};

export default DetailPage;
