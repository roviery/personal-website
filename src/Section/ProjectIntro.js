function ProjectIntro(props) {
    return (
        <div className="flex flex-col justify-center min-h-screen max-w-7xl p-16 mx-auto">
            <div className="my-16">
                <h2>{props.type}</h2>
                <h1 className="my-4">{props.projectName}</h1>
                <h2>{props.desc}</h2>
            </div>
        </div>
    )
}

export default ProjectIntro