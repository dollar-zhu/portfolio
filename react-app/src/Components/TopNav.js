import React from "react";
import { usePageUpdate } from "../Providers/PageProvider";

const TopNav = () => {
  const updatePage = usePageUpdate();
  return (
    <div className="top-nav">
      <div className="nav-links">
        <h2
          onClick={() => {
            updatePage("projects");
          }}
        >
          {`< Back to Projects`}
        </h2>
      </div>
    </div>
  );
};

export default TopNav;
