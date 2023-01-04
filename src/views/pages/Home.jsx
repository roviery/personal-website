import About from '../section/About'
import Introduction from '../section/Introduction'
import Project from '../section/Project'

function Home(props) {
  return (
    <div className='text-slate-800'>
      <Introduction />
      <About />
      <Project />
    </div>
  )
}

export default Home