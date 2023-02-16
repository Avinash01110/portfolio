import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id ,skills}) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/projects");
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <h3>{skills}</h3>
    </div>
  );
}

export default ProjectItem;