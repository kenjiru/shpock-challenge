import * as React from "react";
import { Component, ReactElement } from "react";

import IconSlider from "../../../icon-slider/IconSlider";
import Section from "../../../section/Section";

class Year extends Component<IYearProps> {
    public static MIN: number = 1970;
    public static MAX: number = 2017;

    public static defaultProps: IYearProps = {
        startYear: Year.MIN,
        endYear: Year.MAX,
        onChange: () => {/* Empty bock */
        }
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                icon="registration-date.png"
                title="Year"
                titleRight={this.getTitleRight()}
            >
                <IconSlider
                    iconLeft="old-car.png"
                    iconRight="new-car.png"
                    min={Year.MIN}
                    max={Year.MAX}
                    step={1}
                    value={this.props.startYear}
                    onChange={this.handleChange}
                />
            </Section>
        );
    }

    private handleChange = (ev: React.MouseEvent<{}>, value: number) => {
        this.props.onChange(value, this.props.endYear);
    }

    private getTitleRight() {
        if (this.props.startYear === Year.MIN) {
            return "all";
        }

        return `${this.props.startYear} - ${this.props.endYear}`;
    }
}

interface IYearProps {
    startYear: number;
    endYear: number;
    onChange: (startYear: number, endYear: number) => void;
}

export default Year;
