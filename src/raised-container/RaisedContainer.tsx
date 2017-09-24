import * as classNames from "classnames";
import * as React from "react";
import { Component, ReactElement } from "react";
import { MuiTheme } from "material-ui/styles";
import muiThemeable from "material-ui/styles/muiThemeable";
import { grey300 } from "material-ui/styles/colors";

import "./RaisedContainer.css";

class RaisedContainer extends Component<IRaisedContainerProps> {
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
            backgroundColor: checked ? this.props.muiTheme.palette.primary1Color : grey300
        };
    }

    private getClassName(): string {
        return classNames("raised-container", this.props.className);
    }
}

interface IRaisedContainerProps {
    className?: string;
    checked: boolean;
    muiTheme?: MuiTheme;
}

export default muiThemeable()(RaisedContainer);
