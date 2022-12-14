import {Link} from "react-scroll"

function Introduction(props) {
  return (
    <div className="flex flex-col justify-center cursor-default min-h-screen p-4">
      <div>
        <h1 className="block text-center">NATHANAEL ROVIERY</h1>
        <div className="flex justify-center">
          <Link
            className="text-center text-white bg-slate-800 rounded-lg 
                        cursor-pointer duration-300 p-2 m-8 hover:scale-110 hover:duration-300"
            to="about"
            spy={true}
            smooth={true}
            duration={500}>
            Who Am I ?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Introduction