import React from "react";
import ReactPlayer from "react-player"

function ProjectDemo(props) {
    return (
        <div className="container flex flex-col p-4 mx-auto">
            <h3 className="my-4">Project Demo</h3>
            <div>
                <ReactPlayer url='https://www.youtube.com/watch?v=ceQ2XFS1tUo' />
            </div>
            <a
                className="font-poppins font-semibold text-xl my-4 
                hover:underline hover:underline-offset-8 md:text-2xl"
                href={props.repo}
                target="_blank"
                rel="noreferrer"
            >Source Code 🔗</a>
        </div>
    )
}

export default ProjectDemo