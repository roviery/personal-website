import { useLocation, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { FetchProject } from "../data/Fetch";
import ProjectIntro from "../section/ProjectIntro";
import ProjectDesc from "../section/ProjectDesc";
import ProjectTech from "../section/ProjectTech";
import ProjectDemo from "../section/ProjectDemo";

function ProjectDetail(props) {
    const location = useLocation()
    const {link} = location.state

    const { id } = useParams()

    const [isLoaded, setIsLoaded] = useState(false);
    const [project, setProject] = useState([]);

    useEffect(() => {
        FetchProject(id, link).then(
            (data) => {
                setProject(data.result)
                setIsLoaded(true)
            }
        )
    }, [id, link])

    if (!isLoaded) {
        return (
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-slate-800">
                <h2>Loading...</h2>
            </div>
        )
    }
    if (project) {
        return (
            <div className="text-slate-800">
                <ProjectIntro
                    type={project.type}
                    name={project.name}
                    headline={project.headline}
                />
                <ProjectDesc desc={project.description} />
                <ProjectTech tech={project.tech} />
                <ProjectDemo repo={project.repo_url} />
            </div>
        )
    }
}

export default ProjectDetail