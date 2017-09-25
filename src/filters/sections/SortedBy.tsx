import * as React from "react";
import { Component, ReactElement } from "react";
import ClearFix from "material-ui/internal/ClearFix";

import Section from "../../section/Section";
import RaisedRadioButton from "../../raised-radio-button/RaisedRadioButton";

class SortedBy extends Component<ISortedByProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                className="sorted-by"
                icon="sorting.png"
                title="Sort by"
            >
                <RaisedRadioButton
                    value="distance"
                    label="Distance"
                    onCheck={this.handleCheck}
                    checked={this.props.value === "distance"}
                />
                <RaisedRadioButton
                    value="date"
                    label="Date"
                    onCheck={this.handleCheck}
                    checked={this.props.value === "date"}
                />
                <ClearFix/>
                <RaisedRadioButton
                    value="price-up"
                    label="Price up"
                    onCheck={this.handleCheck}
                    checked={this.props.value === "price-up"}
                />
                <RaisedRadioButton
                    value="price-down"
                    label="Price down"
                    onCheck={this.handleCheck}
                    checked={this.props.value === "price-down"}
                />
            </Section>
        );
    }

    private handleCheck = (ev: React.FormEvent<{}>, selected: string): void => {
        this.props.onChange(selected);
    }
}

interface ISortedByProps {
    value?: string;
    onChange?: (value: string) => void;
}

export default SortedBy;
