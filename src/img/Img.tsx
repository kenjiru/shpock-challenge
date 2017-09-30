import * as React from "react";
import { Component, ReactElement } from "react";

class Img extends Component<IImgProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <img
                className={this.props.className}
                src={`img/${this.props.src}`}
            />
        );
    }
}

interface IImgProps {
    className?: string;
    src: string;
}

export default Img;
