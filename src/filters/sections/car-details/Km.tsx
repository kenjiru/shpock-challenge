import * as React from "react";
import { Component, ReactElement } from "react";

import IconSlider from "../../../icon-slider/IconSlider";
import Section from "../../../section/Section";

class Km extends Component<IKmProps> {
    public static MIN: number = 5000;
    public static MAX: number = 200000;
    public static STEP: number = 5000;

    public static defaultProps: IKmProps = {
        value: Km.MAX,
        onChange: () => {/* Empty bock */
        }
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                icon="mileage.png"
                title="km"
                titleRight={this.getTitleRight()}
            >
                <IconSlider
                    iconLeft="distance-short.png"
                    iconRight="distance-long.png"
                    min={Km.MIN}
                    max={Km.MAX}
                    step={Km.STEP}
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
        if (this.props.value === Km.MAX) {
            return "all";
        }

        return `up to ${this.props.value} km`;
    }
}

interface IKmProps {
    value: number;
    onChange: (value: number) => void;
}

export default Km;
