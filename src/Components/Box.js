import React from "react";

class Box extends React.Component {
    render() {
        return (
            <a
                className="relative border border-slate-800 rounded cursor-pointer p-6 
                        duration-300 hover:bg-slate-800 hover:text-white 
                        hover:duration-300"
                href={this.props.link}
                target="_blank"
                rel="noreferrer"
            >
                <h3 className="font-medium">{this.props.type}</h3>
                <h2 className="text-3xl my-4">{this.props.title}</h2>
                <p className="mb-12">{this.props.desc}</p>
                {this.props.icon}
                <p className="absolute bottom-4 right-4">Detail &rarr; </p>
            </a>
        )
    }
}

export default Box