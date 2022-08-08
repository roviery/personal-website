import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { FetchProject } from "../data/Fetch";
import ProjectIntro from "../section/ProjectIntro";
import ProjectDesc from "../section/ProjectDesc";
import ProjectTech from "../section/ProjectTech";
import ProjectDemo from "../section/ProjectDemo";

function ProjectDetail(props) {
    const { id } = useParams()

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [project, setProject] = useState([]);

    useEffect(() => {
        FetchProject(id).then(
            (data) => {
                setProject(data.result)
                setIsLoaded(true)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
    }, [id])

    if (error) {
        return <div>Error: {error.message}</div>
    }
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