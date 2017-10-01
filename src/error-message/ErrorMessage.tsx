import * as _ from "lodash";
import * as React from "react";
import { Component, CSSProperties, ReactElement } from "react";
import { FontIcon } from "material-ui";
import { MuiTheme } from "material-ui/styles";
import muiThemeable from "material-ui/styles/muiThemeable";

import "./ErrorMessage.css";

export class ErrorMessage extends Component<IErrorMessageProps> {
    public static ERROR_TEXT_CLASS: string = "error-text";

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="error-message">
                <FontIcon
                    className="material-icons"
                    style={this.getIconStyles()}
                >
                    warning
                </FontIcon>

                <span
                    className={ErrorMessage.ERROR_TEXT_CLASS}
                    style={this.getIconStyles()}
                >
                    {this.props.text}
                </span>
            </div>
        );
    }

    private getIconStyles(): CSSProperties {
        return {
            color: _.get(this.props, "muiTheme.textField.errorColor")
        };
    }
}

export interface IErrorMessageProps {
    text: string;
    muiTheme?: MuiTheme;
}

export default muiThemeable()(ErrorMessage);
