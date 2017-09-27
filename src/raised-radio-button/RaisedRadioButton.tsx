import * as classNames from "classnames";
import * as React from "react";
import { Component, CSSProperties, ReactElement } from "react";
import { RadioButton, RadioButtonProps } from "material-ui";
import RaisedContainer from "../raised-container/RaisedContainer";
import { grey700 } from "material-ui/styles/colors";

import "./RaisedRadioButton.css";

class RaisedRadioButton extends Component<IRaisedRadioButtonProps, IRaisedRadioButtonState> {
    public render(): ReactElement<HTMLElement> {
        return (
            <RaisedContainer
                className={this.getClassName()}
                checked={this.props.checked}
            >
                <RadioButton
                    {...this.props}
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
            lineHeight: "18px"
        };
    }

    private getClassName(): string {
        return classNames("raised-radio-button", this.props.className);
    }
}

interface IRaisedRadioButtonState {
}

interface IRaisedRadioButtonProps extends RadioButtonProps {
}

export default RaisedRadioButton;
