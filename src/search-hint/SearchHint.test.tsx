import * as React from "react";
import { shallow } from "enzyme";
import shallowToJson from "enzyme-to-json";

import SearchHint from "./SearchHint";

describe("SearchHint", () => {
    it("should render correctly", () => {
        const output = shallow(
            <SearchHint/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
