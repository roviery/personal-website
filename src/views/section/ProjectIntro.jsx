import {Link as ScrollLink} from "react-scroll"
import {Link} from "react-router-dom"
function ProjectIntro(props) {
  return (
    <div className="container min-h-screen mx-auto p-4">
      <div className="flex flex-col justify-between min-h-[60vh] max-w-7xl">
        <Link
          className="
                        font-poppins font-medium text-lg cursor-pointer
                        duration-100 hover:underline hover:underline-offset-8"
          to='/'
        >&larr; Homepage
        </Link>

        <div>
          <h3 className="font-medium">{props.type}</h3>
          <h1 className="my-4">{props.name}</h1>
          <h3 className="font-medium">{props.headline}</h3>
        </div>
      </div>



      <ScrollLink
        className="animate-bounce absolute bottom-12 left-[47%] -translate-y-1/2 -translate-x-1/2
                        font-poppins font-semibold text-2xl cursor-pointer 
                        border-2 border-slate-800 rounded-full
                        pb-2 pt-1 px-4 duration-100
                        hover:text-white hover:border-white hover:bg-slate-800 hover:duration-100
                        md:text-4xl md:px-5 md:pt-1 md:pb-3"
        to="project_desc"
        spy={true}
        smooth={true}
        duration={500}
      >&darr;</ScrollLink>

    </div>
  )
}

export default ProjectIntro