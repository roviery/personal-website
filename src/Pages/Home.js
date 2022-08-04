import About from '../Section/About'
import Introduction from '../Section/Introduction'
import Project from '../Section/Project'

function Home(props) {
    return (
        <div className='font-poppins text-slate-800'>
            <Introduction />
            <About />
            <Project />
        </div>
    )
}

export default Home