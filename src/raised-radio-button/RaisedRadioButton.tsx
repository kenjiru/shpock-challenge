import * as classNames from "classnames";
import * as React from "react";
import { Component, CSSProperties, ReactElement } from "react";
import { RadioButton, RadioButtonProps } from "material-ui";
import { grey700 } from "material-ui/styles/colors";

import RaisedContainer from "../raised-container/RaisedContainer";

import "./RaisedRadioButton.css";

class RaisedRadioButton extends Component<RadioButtonProps> {
    public static CLASS_NAME: string = "raised-radio-button";
    public static LINE_HEIGHT: string = "18px";
    public static CHECKED_COLOR: string = "white";
    public static NORMAL_COLOR: string = grey700;
    public static SIZE: number = 20;
    public static FONT_SIZE: number = 13;

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
            fill: checked ? RaisedRadioButton.CHECKED_COLOR : RaisedRadioButton.NORMAL_COLOR,
            width: RaisedRadioButton.SIZE,
            height: RaisedRadioButton.SIZE
        };
    }

    private getLabelStyle(): CSSProperties {
        const {checked} = this.props;

        return {
            color: checked ? RaisedRadioButton.CHECKED_COLOR : RaisedRadioButton.NORMAL_COLOR,
            fontSize: RaisedRadioButton.FONT_SIZE,
            lineHeight: RaisedRadioButton.LINE_HEIGHT
        };
    }

    private getClassName(): string {
        return classNames(RaisedRadioButton.CLASS_NAME, this.props.className);
    }
}

export default RaisedRadioButton;
