import * as React from "react";
import { Component, ReactElement } from "react";

import MapWithSearchBox from "./MapWithSearchBox";

class LocationMap extends Component<ILocationMapProps> {
    public static radiusArr: number[] = [
        1000,
        2000,
        3000,
        4000,
        5000,
        7000,
        10000,
        15000,
        20000,
        30000,
        60000,
        100000,
        200000,
        300000,
        400000,
        500000,
        1000000,
        1000,
    ];

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="location-map">
                <MapWithSearchBox
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `400px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                    onAddressChange={this.props.onChange}
                    circleRadius={this.getCircleRadius()}
                />
            </div>
        );
    }

    private getCircleRadius(): number {
        return LocationMap.radiusArr[this.props.radius];
    }
}

interface ILocationMapProps {
    address: string;
    onChange: (address: string) => void;
    radius: number;
}

export default LocationMap;
