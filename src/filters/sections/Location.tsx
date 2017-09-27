import * as _ from "lodash";
import * as React from "react";
import { Component, ReactElement } from "react";
import { Toggle } from "material-ui";

import { IOption } from "../../util/CommonTypes";
import Section from "../../section/Section";
import LocationMap from "../../location-map/LocationMap";
import Radius from "./Radius";

class Location extends Component<ILocationProps, ILocationState> {
    private static EMPTY_LOCATION_TITLE: string = "Current location";

    public state: ILocationState = {
        ownCountry: true,
        locationTitle: Location.EMPTY_LOCATION_TITLE
    };

    public render(): ReactElement<HTMLElement> {
        return (
            <div className="location">
                <Section
                    className="own-country"
                    icon="flag.png"
                    title="Search only in my country"
                    titleRight={this.renderToggle()}
                />

                <Section
                    className="filter-location"
                    icon="location.png"
                    title={this.state.locationTitle}
                    subTitle="Tap on the map to change the location"
                >
                    <LocationMap
                        radius={this.getRadius()}
                        address={this.props.address}
                        onChange={this.handleAddressChange}
                    />
                </Section>
            </div>
        );
    }

    private renderToggle(): ReactElement<HTMLElement> {
        return (
            <Toggle
                toggled={this.props.ownCountry}
                onToggle={this.handleToggleOwnCountry}
            />
        );
    }

    private handleAddressChange = (address: string): void => {
        this.setState({
            locationTitle: address
        });
    }

    private handleToggleOwnCountry = (ev: React.MouseEvent<{}>, ownCountry: boolean): void => {
        this.setState({
            ownCountry
        });
    }

    private getRadius(): number {
        return _.findIndex(
            Radius.availableOptions,
            (option: IOption): boolean => option.id === this.props.radius);
    }
}

interface ILocationState {
    ownCountry?: boolean;
    locationTitle?: string;
}

interface ILocationProps {
    radius: string;
    ownCountry: boolean;
    address: string;
    onChange: (address: string) => void;
}

export default Location;
