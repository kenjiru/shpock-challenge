import * as React from "react";
import { Component, ReactElement } from "react";

import MapWithMarker from "./MapWithMarker";

class LocationMap extends Component<ILocationMapProps> {
    public render(): ReactElement<HTMLElement> {
        return (
            <div className="location-map">
                <MapWithMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `300px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                    address={this.props.address}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

interface ILocationMapProps {
    address: string;
    onChange: (address: string) => void;
}

export default LocationMap;
