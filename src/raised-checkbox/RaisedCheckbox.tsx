import * as classNames from "classnames";
import * as React from "react";
import { Component, CSSProperties, ReactElement } from "react";
import { Checkbox, CheckboxProps } from "material-ui";
import { grey700 } from "material-ui/styles/colors";

import RaisedContainer from "../raised-container/RaisedContainer";

class RaisedCheckbox extends Component<IRaisedCheckboxProps, IRaisedCheckboxState> {
    public render(): ReactElement<HTMLElement> {
        const {checked, ...props} = this.props;

        return (
            <RaisedContainer
                className={this.getClassName()}
                checked={checked}
            >
                <Checkbox
                    {...props}
                    iconStyle={this.getIconStyle()}
                    labelStyle={this.getLabelStyle()}
                />
            </RaisedContainer>
        );
    }

    private getIconStyle(): CSSProperties {
        const {checked} = this.props;

        return {
            fill: checked ? "white" : grey700,
            width: 20,
            height: 20
        };
    }

    private getLabelStyle(): CSSProperties {
        const {checked} = this.props;

        return {
            color: checked ? "white" : grey700,
            fontSize: 13,
            lineHeight: "20px"
        };
    }

    private getClassName(): string {
        return classNames("raised-checkbox", this.props.className);
    }
}

interface IRaisedCheckboxState {
}

interface IRaisedCheckboxProps extends CheckboxProps {
    className?: string;
}

export default RaisedCheckbox;
