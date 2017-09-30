import * as React from "react";
import { RaisedButton } from "material-ui";
import { shallow, ShallowWrapper } from "enzyme";
import shallowToJson from "enzyme-to-json";

import ActionButtons from "./ActionButtons";

describe("ActionButtons", () => {
    it("should render correctly", () => {
        const fn = jest.fn();

        const output = shallow(
            <ActionButtons isSubmitDisabled={false} onSubmit={fn} onReset={fn}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it("should have the submit button disabled if the isSubmitDisabled prop is true", () => {
        const fn = jest.fn();
        const output: ShallowWrapper = shallow(
            <ActionButtons isSubmitDisabled={true} onSubmit={fn} onReset={fn}/>
        );

        expect(output.find(RaisedButton).length).toEqual(2);

        expect(output.containsMatchingElement(<RaisedButton
                label="Search"
                primary={true}
                disabled={true}/>
            )
        ).toBe(true);
    });

    it("should handle clicking on the reset button", () => {
        const fn = jest.fn();
        const handleReset = jest.fn();
        const output: ShallowWrapper = shallow(
            <ActionButtons isSubmitDisabled={true} onSubmit={fn} onReset={handleReset}/>
        );

        output.find(".reset").simulate("click");

        expect(handleReset).toHaveBeenCalled();
    });

    it("should handle clicking on the submit button", () => {
        const fn = jest.fn();
        const handleSubmit = jest.fn();
        const output: ShallowWrapper = shallow(
            <ActionButtons isSubmitDisabled={true} onSubmit={handleSubmit} onReset={fn}/>
        );

        output.find(".submit").simulate("click");

        expect(handleSubmit).toHaveBeenCalled();
    });

});
