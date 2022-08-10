import { Link } from "react-router-dom"

function Box(props) {
    return (
        <Link
            className="relative border border-slate-800 rounded cursor-pointer p-6 
                        duration-300 hover:bg-slate-800 hover:text-white 
                        hover:duration-300"
            to={`/project/${props.id}`}
            state={{
                link: props.link,
            }}
        >
            <h3 className="font-medium">{props.type}</h3>
            <h2 className="text-3xl my-4">{props.title}</h2>
            <p className="mb-12">{props.desc}</p>
            {props.icon}
            <p className="absolute bottom-4 right-4">Detail &rarr; </p>
        </Link>
    )
}

export default Box