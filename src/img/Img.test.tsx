import * as React from "react";
import { shallow } from "enzyme";
import shallowToJson from "enzyme-to-json";

import Img from "./Img";

describe("ErrorMessage", () => {
    it("should render correctly", () => {
        const output = shallow(
            <Img className="foo" src="bar.png"/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
