import * as React from "react";
import { CSSProperties, HTMLProps } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { mount, ReactWrapper, shallow } from "enzyme";
import shallowToJson from "enzyme-to-json";

import ThemedRaisedContainer, { IRaisedContainerProps, RaisedContainer } from "./RaisedContainer";

describe("RaisedContainer", () => {
    it("should render correctly", () => {
        const output = shallow(
            <RaisedContainer
                className="custom-class"
                checked={false}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it("should have the correct style if is checked", () => {
        const output: ReactWrapper = mount(
            <MuiThemeProvider>
                <ThemedRaisedContainer checked={true}/>
            </MuiThemeProvider>
        );

        const raisedContainerProps: IRaisedContainerProps = output.find(RaisedContainer).props();
        const divProps: HTMLProps<HTMLElement> = output.find(RaisedContainer).childAt(0).props();

        expect(divProps.style.backgroundColor).toBe(raisedContainerProps.muiTheme.palette.primary1Color);
    });

    it("should have the correct style if is NOT checked", () => {
        const output: ReactWrapper = mount(
            <RaisedContainer checked={false}/>
        );

        let style: CSSProperties = output.childAt(0).props().style;
        expect(style.backgroundColor).toBe(RaisedContainer.NORMAL_BACKGROUND);
    });
});
