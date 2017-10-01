import * as React from "react";
import { shallow } from "enzyme";
import shallowToJson from "enzyme-to-json";

import IconSlider from "./IconSlider";

describe("ErrorMessage", () => {
    it("should render correctly", () => {
        const output = shallow(
            <IconSlider iconRight="right.png" iconLeft="left.png"/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
