import * as _ from "lodash";
import * as React from "react";
import { Component, ReactElement } from "react";

import NumberUtil from "../../util/NumberUtil";
import Section from "../../section/Section";
import StyledTextField from "../../styled-text-field/StyledTextField";
import ErrorMessage from "../../error-message/ErrorMessage";

class Price extends Component<IPriceProps, IPriceState> {
    public state: IPriceState = {
        lastChangedInput: null
    };

    public static isValid(minValue: number, maxValue: number): boolean {
        return _.isNil(minValue) || _.isNil(maxValue) || minValue <= maxValue;
    }

    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                className="filter-price"
                icon="price.png"
                title="Set your price range"
            >
                <div>
                    <StyledTextField
                        className="min-price"
                        floatingLabelText="Min. price"
                        value={this.props.minValue}
                        onChange={this.handleMinChange}
                        hasError={this.inputHasError(InputType.MIN_VALUE)}
                    />
                    <StyledTextField
                        className="max-price"
                        floatingLabelText="Max. price"
                        value={this.props.maxValue}
                        onChange={this.handleMaxChange}
                        hasError={this.inputHasError(InputType.MAX_VALUE)}
                    />
                </div>

                {this.renderErrorMessage()}
            </Section>
        );
    }

    private renderErrorMessage(): ReactElement<HTMLElement> {
        if (Price.isValid(this.props.minValue, this.props.maxValue)) {
            return undefined;
        }

        return (
            <ErrorMessage
                text="Min. price should be less than the max. price."
            />
        );
    }

    private handleMinChange = (e: React.FormEvent<{}>, newValue: string): void => {
        this.notifyParent(InputType.MIN_VALUE, newValue);
    }

    private handleMaxChange = (e: React.FormEvent<{}>, newValue: string): void => {
        this.notifyParent(InputType.MAX_VALUE, newValue);
    }

    private notifyParent(inputType: InputType, newValue: string): void {
        let numericValue: number = NumberUtil.convertToNumber(newValue);

        if (Number.isNaN(numericValue)) {
            return;
        }

        if (inputType === InputType.MIN_VALUE) {
            this.props.onChange(numericValue, this.props.maxValue);
        } else {
            this.props.onChange(this.props.minValue, numericValue);
        }

        this.setState({
            lastChangedInput: inputType
        });
    }

    private inputHasError(inputType: InputType): boolean {
        return Price.isValid(this.props.minValue, this.props.maxValue) === false &&
            this.state.lastChangedInput === inputType;
    }
}

enum InputType {MIN_VALUE, MAX_VALUE}

interface IPriceState {
    lastChangedInput?: InputType;
}

interface IPriceProps {
    minValue: number;
    maxValue: number;
    onChange: (minValue: number, maxValue: number) => void;
}

export default Price;
