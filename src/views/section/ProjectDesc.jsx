import React from "react";

function ProjectDesc(props) {
  return (
    <div className="container text-justify leading-relaxed p-4 mx-auto" id="project_desc">
      <h3 className="my-4">About Project</h3>
      <p>{props.desc}</p>
    </div>
  )
}

export default ProjectDesc