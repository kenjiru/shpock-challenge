import * as classNames from "classnames";
import * as React from "react";
import { Component, ReactElement } from "react";

import "./Section.css";

class Section extends Component<ISectionProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className={this.getClassName()}>
                <div className="section-header">
                    <img
                        className="section-icon"
                        src={"img/" + this.props.icon}
                    />
                    <div className="section-title">{this.props.title}</div>
                    {this.renderTitleRight()}
                </div>
                <div className="section-content">
                    {this.props.children}
                </div>
            </div>
        );
    }

    private renderTitleRight(): string | ReactElement<HTMLElement> {
        if (typeof this.props.titleRight === "undefined") {
            return <div/>;
        }

        return (
            <div className="section-right">
                {this.props.titleRight}
            </div>
        );

    }

    private getClassName(): string {
        return classNames("section", this.props.className);
    }
}

interface ISectionProps {
    icon: string;
    title: string;
    titleRight?: string | ReactElement<HTMLElement>;
    className?: string;
}

export default Section;
