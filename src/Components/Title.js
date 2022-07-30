import React from "react";

class Title extends React.Component {
    render() {
        return (
            <h1 className="text-2xl text-center font-medium my-5">{this.props.value}</h1>
        )
    }
}

export default Title