import * as React from "react";
import { shallow } from "enzyme";
import shallowToJson from "enzyme-to-json";

import Header from "./Header";

describe("Header", () => {
    it("should render correctly", () => {
        const output = shallow(
            <Header/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
