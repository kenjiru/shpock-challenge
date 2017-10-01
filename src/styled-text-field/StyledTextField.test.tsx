import * as React from "react";
import { mount, shallow, ReactWrapper } from "enzyme";
import shallowToJson from "enzyme-to-json";
import { TextField, TextFieldProps } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";

import ThemedStyledTextField, { IStyledTextFieldProps, StyledTextField } from "./StyledTextField";

describe("StyledTextField", () => {
    const ID: string = "foo";

    it("should render correctly", () => {
        const output = shallow(
            <StyledTextField id={ID} hasError={false}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it("should have the correct styles when hasError is true", () => {
        const output: ReactWrapper = mount(
            <MuiThemeProvider>
                <ThemedStyledTextField id={ID} hasError={true}/>
            </MuiThemeProvider>
        );

        const styledTextFieldProps: IStyledTextFieldProps = output.find(StyledTextField).props();
        const textFieldProps: TextFieldProps = output.find(TextField).props();

        expect(textFieldProps.underlineStyle.borderColor).toBe(styledTextFieldProps.muiTheme.textField.errorColor);
        expect(textFieldProps.underlineFocusStyle.borderColor).toBe(styledTextFieldProps.muiTheme.textField.errorColor);

        expect(textFieldProps.inputStyle.color).toBe(styledTextFieldProps.muiTheme.textField.errorColor);
        expect(textFieldProps.floatingLabelStyle.color).toBe(styledTextFieldProps.muiTheme.textField.errorColor);
    });

    it("should have the correct styles when hasError is false", () => {
        const output: ReactWrapper = mount(
            <MuiThemeProvider>
                <ThemedStyledTextField id={ID} hasError={false}/>
            </MuiThemeProvider>
        );

        const textFieldProps: TextFieldProps = output.find(TextField).props();

        expect(textFieldProps.underlineStyle.borderColor).toBeUndefined();
        expect(textFieldProps.underlineFocusStyle.borderColor).toBeUndefined();

        expect(textFieldProps.inputStyle.color).toBeUndefined();
        expect(textFieldProps.floatingLabelStyle.color).toBeUndefined();
    });
});
