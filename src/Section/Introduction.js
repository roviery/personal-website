import React from "react";
import { Link } from "react-scroll"

class Introduction extends React.Component {
    render() {
        return (
            <div className="flex flex-col justify-center cursor-default min-h-screen p-4 mx-auto">
                <div>
                    <h1 className="block text-center">NATHANAEL ROVIERY</h1>
                    <div className="flex justify-center">
                        <Link
                            className="text-center text-white bg-slate-800 rounded-lg 
                        cursor-pointer duration-300 p-2 m-10 hover:scale-110 hover:duration-300"
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
}

export default Introduction