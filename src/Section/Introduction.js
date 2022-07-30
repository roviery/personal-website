import React from "react";
import { Link } from "react-scroll"

class Introduction extends React.Component {
    render() {
        return (
            <div className="container cursor-default mx-auto mt-60">
                <h1 className="block text-center">NATHANAEL ROVIERY</h1>
                <div className="flex justify-center">
                    <Link
                        className="text-center text-white bg-slate-800 p-2 rounded-lg 
                        cursor-pointer duration-300 m-10 hover:scale-110 hover:duration-300"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Who Am I ?
                    </Link>
                </div>
            </div>
        )
    }
}

export default Introduction