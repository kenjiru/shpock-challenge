import * as _ from "lodash";
import * as React from "react";
import { Component, ReactElement } from "react";

import { IOption } from "../../util/CommonTypes";
import Section from "../../section/Section";
import IconSlider from "../../icon-slider/IconSlider";

class Radius extends Component<IRadiusProps> {
    public static availableOptions: IOption[] = [
        {id: "1km", label: "1 km"},
        {id: "2km", label: "2 km"},
        {id: "3km", label: "3 km"},
        {id: "4km", label: "4 km"},
        {id: "5km", label: "5 km"},
        {id: "7km", label: "7 km"},
        {id: "10km", label: "10 km"},
        {id: "15km", label: "15 km"},
        {id: "20km", label: "20 km"},
        {id: "30km", label: "30 km"},
        {id: "60km", label: "60 km"},
        {id: "100km", label: "100 km"},
        {id: "200km", label: "200 km"},
        {id: "300km", label: "300 km"},
        {id: "400km", label: "400 km"},
        {id: "500km", label: "500 km"},
        {id: "1000km", label: "1000 km"},
        {id: "evr", label: "everywhere"},
    ];

    public render(): ReactElement<HTMLElement> {
        return (
            <Section
                className="radius"
                icon="radius.png"
                title="Radius"
                titleRight={this.getTitleRight()}
            >

                <IconSlider
                    iconLeft="home.png"
                    iconRight="world.png"
                    min={0}
                    max={17}
                    step={1}
                    value={this.getIndex()}
                    onChange={this.handleChange}
                />
            </Section>
        );
    }

    private handleChange = (ev: React.MouseEvent<{}>, value: number) => {
        const selectedOption: IOption = Radius.availableOptions[value];

        this.props.onChange(selectedOption.id);
    }

    private getTitleRight() {
        const radiusIndex: number = this.getIndex();

        return Radius.availableOptions[radiusIndex].label;
    }

    private getIndex(): number {
        return _.findIndex(
            Radius.availableOptions,
            (option: IOption): boolean => option.id === this.props.value);
    }
}

interface IRadiusProps {
    value: string;
    onChange: (newValue: string) => void;
}

export default Radius;
