import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import shallowToJson from "enzyme-to-json";
import { RadioButton, RadioButtonProps } from "material-ui";

import RaisedRadioButton from "./RaisedRadioButton";

describe("RaisedRadioButton", () => {
    it("should render correctly", () => {
        const output: ShallowWrapper = shallow(
            <RaisedRadioButton/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it("should pass the correct styles to the underlying RadioButton", () => {
        const output: ShallowWrapper = shallow(
            <RaisedRadioButton/>
        );

        let props: RadioButtonProps = output.find(RadioButton).props();

        expect(props.iconStyle.width).toBe(RaisedRadioButton.SIZE);
        expect(props.iconStyle.height).toBe(RaisedRadioButton.SIZE);
        expect(props.labelStyle.lineHeight).toBe(RaisedRadioButton.LINE_HEIGHT);
    });

    it("should have the correct color when it's checked", () => {
        const output: ShallowWrapper = shallow(
            <RaisedRadioButton checked={true}/>
        );

        let props: RadioButtonProps = output.find(RadioButton).props();

        expect(props.iconStyle.fill).toBe(RaisedRadioButton.CHECKED_COLOR);
        expect(props.labelStyle.color).toBe(RaisedRadioButton.CHECKED_COLOR);
    });

    it("should have the correct color when it's NOT checked", () => {
        const output: ShallowWrapper = shallow(
            <RaisedRadioButton checked={false}/>
        );

        let props: RadioButtonProps = output.find(RadioButton).props();

        expect(props.iconStyle.fill).toBe(RaisedRadioButton.NORMAL_COLOR);
        expect(props.labelStyle.color).toBe(RaisedRadioButton.NORMAL_COLOR);
    });
});
