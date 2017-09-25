import * as React from "react";
import { Component, ReactElement } from "react";
import { TextField } from "material-ui";

import NumberUtil from "../../util/NumberUtil";
import Section from "../../section/Section";

class Price extends Component<IPriceProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                className="filter-price"
                icon="price.png"
                title="Set your price range"
            >
                <TextField
                    className="min-price"
                    floatingLabelText="Min. price"
                    value={this.props.minValue}
                    onChange={this.handleChange.bind(this, "min-value")}
                />
                <TextField
                    className="max-price"
                    floatingLabelText="Max. price"
                    value={this.props.maxValue}
                    onChange={this.handleChange.bind(this, "max-value")}
                />
            </Section>
        );
    }

    private handleChange = (inputType: string, e: React.FormEvent<{}>, newValue: string): void => {
        let numericValue: number = NumberUtil.convertToNumber(newValue);

        if (numericValue === NaN) {
            return;
        }

        if (inputType === "min-value") {
            this.props.onChange(numericValue, this.props.maxValue);
        } else {
            this.props.onChange(this.props.minValue, numericValue);
        }
    }
}

interface IPriceProps {
    minValue: number;
    maxValue: number;
    onChange: (minValue: number, maxValue: number) => void;
}

export default Price;
