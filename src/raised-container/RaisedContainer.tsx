import * as _ from "lodash";
import * as classNames from "classnames";
import * as React from "react";
import { Component, ReactElement } from "react";
import { MuiTheme } from "material-ui/styles";
import muiThemeable from "material-ui/styles/muiThemeable";
import { grey300 } from "material-ui/styles/colors";

import "./RaisedContainer.css";

export class RaisedContainer extends Component<IRaisedContainerProps> {
    public static CLASS_NAME: string = "raised-container";
    public static NORMAL_BACKGROUND: string = grey300;

    public render(): ReactElement<HTMLElement> {
        return (
            <div
                className={this.getClassName()}
                style={this.getStyle()}
            >
                {this.props.children}
            </div>
        );
    }

    private getStyle(): Object {
        const {checked} = this.props;

        return {
            backgroundColor: checked ? this.getPrimaryColor() : RaisedContainer.NORMAL_BACKGROUND
        };
    }

    private getPrimaryColor(): string {
        return _.get(this.props, "muiTheme.palette.primary1Color");
    }

    private getClassName(): string {
        return classNames(RaisedContainer.CLASS_NAME, this.props.className);
    }
}

export interface IRaisedContainerProps {
    className?: string;
    checked: boolean;
    muiTheme?: MuiTheme;
}

export default muiThemeable()(RaisedContainer);
