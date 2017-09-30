import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import shallowToJson from "enzyme-to-json";

import Section from "./Section";
import Img from "../img/Img";

describe("Section", () => {
    it("should render correctly", () => {
        const output = shallow(
            <Section className="custom-class"/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it("should render an icon if an icon prop is present", () => {
        const ICON: string = "foo.png";
        const output: ShallowWrapper = shallow(
            <Section icon={ICON}/>
        );

        expect(output.contains(<Img className="icon" src={ICON}/>)).toBe(true);
    });

    it("should NOT render an icon if an icon prop is NOT present", () => {
        const output: ShallowWrapper = shallow(
            <Section/>
        );

        expect(output.find(Img).length).toBe(0);
    });

    it("should render the title right if the prop is present", () => {
        const titleRight: string = "Title Right";
        const output: ShallowWrapper = shallow(
            <Section titleRight={titleRight}/>
        );

        expect(output.contains(<div className="title-right">{titleRight}</div>)).toBe(true);
    });

    it("should handle clicking on the header", () => {
        const handleClick = jest.fn();
        const output: ShallowWrapper = shallow(
            <Section onHeaderClick={handleClick}/>
        );

        output.find(".section-header").simulate('click');

        expect(handleClick).toHaveBeenCalled();
    });
});
