import { useLocation } from 'react-router-dom'
import ProjectIntro from '../Section/ProjectIntro'

function ProjectDetail(props) {
    const location = useLocation()
    const { projectName, type, desc } = location.state
    return (
        <div className='font-poppins text-slate-800'>
            <ProjectIntro
                projectName={projectName}
                type={type}
                desc={desc}
            />
        </div>
    )
}

export default ProjectDetail