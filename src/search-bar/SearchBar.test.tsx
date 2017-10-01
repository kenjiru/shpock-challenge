import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import shallowToJson from "enzyme-to-json";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
    it("should render correctly", () => {
        const fn = jest.fn();

        const output = shallow(
            <SearchBar searchStr="" onSubmit={fn} onChange={fn}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it("should call the onChange prop when input changes", () => {
        const INPUT_VALUE: string = "foo";
        const fn = jest.fn();
        const handleChange = jest.fn();

        const output: ShallowWrapper = shallow(
            <SearchBar searchStr="" onSubmit={fn} onChange={handleChange}/>
        );

        output.find("." + SearchBar.SEARCH_INPUT_CLASS).simulate("change", {
            target: {
                value: INPUT_VALUE
            }
        });

        expect(handleChange).toHaveBeenCalledWith(INPUT_VALUE);
    });

    it("should call the onSubmit prop when enter is pressed", () => {
        const fn = jest.fn();
        const handleSubmit = jest.fn();
        const preventDefaultSpy = jest.fn();

        const output: ShallowWrapper = shallow(
            <SearchBar searchStr="" onSubmit={handleSubmit} onChange={fn}/>
        );

        output.find("." + SearchBar.SEARCH_INPUT_CLASS).simulate("keyDown", {
            keyCode: 13,
            preventDefault: preventDefaultSpy
        });

        expect(handleSubmit).toHaveBeenCalled();
        expect(preventDefaultSpy).toHaveBeenCalled();
    });
});
