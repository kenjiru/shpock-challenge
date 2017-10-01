import * as _ from "lodash";
import * as classNames from "classnames";
import * as React from "react";
import { Component, MouseEventHandler, ReactElement } from "react";

import Img from "../img/Img";

import "./Section.scss";

class Section extends Component<ISectionProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className={this.getClassName()}>
                <div className="section-header" onClick={this.props.onHeaderClick}>
                    <div className="icon-container">
                        {this.renderIcon()}
                    </div>
                    <div className="text">
                        <div className="title">{this.props.title}</div>
                        <div className="sub-title">{this.props.subTitle}</div>
                    </div>
                    {this.renderTitleRight()}
                </div>
                <div className="section-content">
                    {this.props.children}
                </div>
            </div>
        );
    }

    private renderIcon(): ReactElement<HTMLElement> {
        if (_.isNil(this.props.icon)) {
            return <div className="icon"/>;
        }

        return (
            <Img
                className="icon"
                src={this.props.icon}
            />
        );
    }

    private renderTitleRight(): string | ReactElement<HTMLElement> {
        if (typeof this.props.titleRight === "undefined") {
            return <div/>;
        }

        return (
            <div className="title-right">
                {this.props.titleRight}
            </div>
        );

    }

    private getClassName(): string {
        return classNames("section", this.props.className);
    }
}

interface ISectionProps {
    icon?: string;
    title?: string;
    subTitle?: string;
    titleRight?: string | ReactElement<HTMLElement>;
    className?: string;
    onHeaderClick?: MouseEventHandler<HTMLElement>;
}

export default Section;
