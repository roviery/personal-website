import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb"

function ProjectTech(props) {
    const arr = props.tech.split(',')

    const techIcons = () => {
        if (arr) {
            return arr.map(icon => techIcon(icon))
        }
    }

    const techIcon = (icon) => {
        if (icon === 'Kotlin') {
            return (
                <TbBrandKotlin className="w-12 h-12" />
            )
        }
        if (icon === 'NodeJs') {
            return (
                <FaNodeJs className="w-10 h-10" />
            )
        }
    }

    return (
        <div className="container p-4 mx-auto">
            <h3 className="my-4">Tech Used</h3>
            {techIcons()}
        </div>
    )
}

export default ProjectTech