import * as _ from "lodash";
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
                    value={this.getIndex()}
                    onChange={this.handleChange}
                />
            </Section>
        );
    }

    private handleChange = (ev: React.MouseEvent<{}>, value: number) => {
        const selectedOption: IOption = DateRange.availableOptions[value];

        this.props.onChange(selectedOption.id);
    }

    private getTitleRight() {
        const radiusIndex: number = this.getIndex();

        return DateRange.availableOptions[radiusIndex].label;
    }

    private getIndex(): number {
        return _.findIndex(
            DateRange.availableOptions,
            (option: IOption): boolean => option.id === this.props.value);
    }
}

interface IDateRangeProps {
    value: string;
    onChange: (newValue: string) => void;
}

export default DateRange;
