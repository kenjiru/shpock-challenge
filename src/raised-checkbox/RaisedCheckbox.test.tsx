import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import shallowToJson from "enzyme-to-json";
import { Checkbox, CheckboxProps } from "material-ui";

import RaisedCheckbox from "./RaisedCheckbox";

describe("RaisedCheckbox", () => {
    it("should render correctly", () => {
        const output: ShallowWrapper = shallow(
            <RaisedCheckbox/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it("should pass the correct styles to the underlying Checkbox", () => {
        const output: ShallowWrapper = shallow(
            <RaisedCheckbox/>
        );

        let props: CheckboxProps = output.find(Checkbox).props();

        expect(props.iconStyle.width).toBe(RaisedCheckbox.SIZE);
        expect(props.iconStyle.height).toBe(RaisedCheckbox.SIZE);
        expect(props.labelStyle.lineHeight).toBe(RaisedCheckbox.LINE_HEIGHT);
    });

    it("should have the correct color when it's checked", () => {
        const output: ShallowWrapper = shallow(
            <RaisedCheckbox checked={true}/>
        );

        let props: CheckboxProps = output.find(Checkbox).props();

        expect(props.iconStyle.fill).toBe(RaisedCheckbox.CHECKED_COLOR);
        expect(props.labelStyle.color).toBe(RaisedCheckbox.CHECKED_COLOR);
    });

    it("should have the correct color when it's NOT checked", () => {
        const output: ShallowWrapper = shallow(
            <RaisedCheckbox checked={false}/>
        );

        let props: CheckboxProps = output.find(Checkbox).props();

        expect(props.iconStyle.fill).toBe(RaisedCheckbox.NORMAL_COLOR);
        expect(props.labelStyle.color).toBe(RaisedCheckbox.NORMAL_COLOR);
    });
});
