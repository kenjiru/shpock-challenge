import * as React from "react";
import { HTMLProps } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { mount, ReactWrapper, shallow } from "enzyme";
import shallowToJson from "enzyme-to-json";

import ThemedErrorMessage, { ErrorMessage, IErrorMessageProps } from "./ErrorMessage";

describe("ErrorMessage", () => {
    const ERROR_TEXT: string = "Error text";

    it("should render correctly", () => {
        const output = shallow(
            <ErrorMessage text={ERROR_TEXT}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it("should have the correct style if is checked", () => {
        const output: ReactWrapper = mount(
            <MuiThemeProvider>
                <ThemedErrorMessage text={ERROR_TEXT}/>
            </MuiThemeProvider>
        );

        const errorMessageProps: IErrorMessageProps = output.find(ErrorMessage).props();
        const errorTextProps: HTMLProps<HTMLElement> = output.find("." + ErrorMessage.ERROR_TEXT_CLASS).props();

        expect(errorTextProps.style.color).toBe(errorMessageProps.muiTheme.textField.errorColor);
    });
});
