import * as React from "react";
import { Component, CSSProperties, ReactElement } from "react";
import { TextField, TextFieldProps } from "material-ui";
import { MuiTheme } from "material-ui/styles";
import muiThemeable from "material-ui/styles/muiThemeable";

export class StyledTextField extends Component<IStyledTextFieldProps> {

    public render(): ReactElement<HTMLElement> {
        let {hasError, muiTheme, ...props} = this.props;

        return (
            <TextField
                {...props}
                underlineStyle={this.getUnderlineStyle()}
                underlineFocusStyle={this.getUnderlineStyle()}
                inputStyle={this.getInputStyle()}
                floatingLabelStyle={this.getInputStyle()}
            />
        );
    }

    private getInputStyle(): CSSProperties {
        if (this.props.hasError) {
            return {
                color: this.props.muiTheme.textField.errorColor
            };
        }

        return {};
    }

    private getUnderlineStyle(): CSSProperties {
        if (this.props.hasError) {
            return {
                borderColor: this.props.muiTheme.textField.errorColor
            };
        }

        return {};
    }
}

export interface IStyledTextFieldProps extends TextFieldProps {
    hasError?: boolean;
    muiTheme?: MuiTheme;
}

export default muiThemeable()(StyledTextField);
