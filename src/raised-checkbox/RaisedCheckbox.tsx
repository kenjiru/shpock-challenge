import * as classNames from "classnames";
import * as React from "react";
import { Component, CSSProperties, ReactElement } from "react";
import { Checkbox, CheckboxProps } from "material-ui";
import { grey700 } from "material-ui/styles/colors";

import RaisedContainer from "../raised-container/RaisedContainer";

import "./RaisedCheckbox.scss";

class RaisedCheckbox extends Component<CheckboxProps> {
    public static CLASS_NAME: string = "raised-checkbox";
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
                <Checkbox
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
            fill: checked ? RaisedCheckbox.CHECKED_COLOR : RaisedCheckbox.NORMAL_COLOR,
            width: RaisedCheckbox.SIZE,
            height: RaisedCheckbox.SIZE
        };
    }

    private getLabelStyle(): CSSProperties {
        const {checked} = this.props;

        return {
            color: checked ? RaisedCheckbox.CHECKED_COLOR : RaisedCheckbox.NORMAL_COLOR,
            fontSize: RaisedCheckbox.FONT_SIZE,
            lineHeight: RaisedCheckbox.LINE_HEIGHT
        };
    }

    private getClassName(): string {
        return classNames(RaisedCheckbox.CLASS_NAME, this.props.className);
    }
}

export default RaisedCheckbox;
