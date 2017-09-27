import * as React from "react";
import { Component, CSSProperties, ReactElement } from "react";
import { FontIcon } from "material-ui";
import { MuiTheme } from "material-ui/styles";
import muiThemeable from "material-ui/styles/muiThemeable";

import "./ErrorMessage.css";

class ErrorMessage extends Component<IErrorMessageProps> {
    private iconStyles: CSSProperties = {
        color: this.props.muiTheme.textField.errorColor
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="error-message">
                <FontIcon
                    className="material-icons"
                    style={this.iconStyles}
                >
                    warning
                </FontIcon>

                <span
                    className="error-text"
                    style={this.iconStyles}
                >
                    {this.props.text}
                </span>
            </div>
        );
    }
}

interface IErrorMessageProps {
    text: string;
    muiTheme?: MuiTheme;
}

export default muiThemeable()(ErrorMessage);
