import * as React from "react";
import { Component, ReactElement } from "react";

import { IOption } from "../../util/CommonTypes";
import Section from "../../section/Section";
import IconSlider from "../../icon-slider/IconSlider";

class DateRange extends Component<IDateRangeProps> {
    public static availableOptions: IOption[] = [
        {id: "24h", label: "24 hours"},
        {id: "3d", label: "3 days"},
        {id: "7d", label: "7 days"},
        {id: "30d", label: "30 days"},
        {id: "frv", label: "forever"}
    ];

    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                className="date-range"
                icon="date.png"
                title="Listed in the last"
                titleRight={this.getTitleRight()}
            >

                <IconSlider
                    iconLeft="egg.png"
                    iconRight="dino.png"
                    min={0}
                    max={4}
                    step={1}
                    value={this.props.value}
                    onChange={this.handleChange}
                />
            </Section>
        );
    }

    private handleChange = (ev: React.MouseEvent<{}>, value: number) => {
        this.props.onChange(value);
    }

    private getTitleRight() {
        return DateRange.availableOptions[this.props.value].label;
    }
}

interface IDateRangeProps {
    value: number;
    onChange: (newValue: number) => void;
}

export default DateRange;
